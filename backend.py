import pandas as pd
from flask import Flask, request
from flask_cors import CORS
import sqlite3
import init_db
import os
import json

df = pd.read_csv('Chicken-Tinder-Restaurant-Dataset.csv')

app = Flask(__name__)
# app.config.from_mapping(DATABASE=os.path.join(app.instance_path, 'flaskr_sqlite'))
cors = CORS(app)
# try:
#     os.makedirs(app.instance_path)
# except OSError:
#     pass
# init_db.init_app(app)

@app.route('/', methods=['GET', 'POST'])
def preference():
    if request.method == 'POST':
        df1 = df[df['ZONE']==request.json['location']]
        df1 = df1.reset_index(drop=True)
        return df1.iloc[request.json['counter']].to_json(orient='index')
        db = init_db.get_db()
        if 'username' in request.json:
            # cursor = db.execute('select * from users where GroupPassword = {}'.format(request.json['code']))
            # entries = cursor.fetchall()
            # if len(entries) == 0:
            db.execute('INSERT INTO groups (GroupPassword) VALUES ({})'.format(request.json['code']))
            db.commit()
            # db.execute('INSERT INTO users (UserName, GroupPassword, LocationPreference) VALUES ({}, {}, {})'.format(request.json['username'], request.json['code'], request.json['location']))
            # db.commit()
            # cur1 = db.execute('SELECT * FROM groups')
            # return json.dumps(dict(cur1.fetchone()))
            #cur1 = db.execute('SELECT * FROM groups')
            #return json.dumps(dict(cur1.fetchone()))
        else:
            curs = db.execute('SELECT * FROM users WHERE GroupPassword = {}'.format(request.json['code']))
            numUsers = len(curs.fetchall())
            row = db.execute('SELECT * FROM groups WHERE GroupPassword = {}'.format(request.json['code']))
            numSwipes = dict(row.fetchone())
            matched = ''
            if numUsers in numSwipes.values():
                matched = str(numSwipes.keys()[numSwipes.values().index(numUsers)])
            if request.json['location'] == 'None':
                if matched != '':
                    return #restaurant row in df
                else:
                    return df.iloc[request.json['counter']].to_json(orient='index')
            else:
                if matched != '':
                    return matched #restaurant row 
                else:
                    df1 = df[df['ZONE']==request.json['location']]
                    df1 = df1.reset_index(drop=True)
                    return df1.iloc[request.json['counter']].to_json(orient='index')

app.secret_key = 'some secret key'
if __name__ == "__main__":
    app.run(port="5000")


