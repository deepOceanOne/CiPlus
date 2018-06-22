#coding=utf-8
from __future__ import print_function, unicode_literals
import url2io
import os
import json
import requests

NER_URL = 'http://api.bosonnlp.com/ner/analysis'

api = url2io.API(os.environ['URL2IO_API'])
ret = api.article(url='https://www.jianshu.com/p/48e283cbf550', fields=['text',])
content = ret['text']


NER_URL = 'http://api.bosonnlp.com/ner/analysis'


s = content
data = json.dumps(s)
headers = {'X-Token': os.environ['BOSON_API']}
resp = requests.post(NER_URL, headers=headers, data=data.encode('utf-8'))


for item in resp.json():
    for entity in item['entity']:
        print(''.join(item['word'][entity[0]:entity[1]]), entity[2])