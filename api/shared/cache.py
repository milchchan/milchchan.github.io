import os
import redis


def get_cache(name):
    r = redis.Redis(host=os.environ['REDIS_HOST'], port=int(os.environ['REDIS_PORT']), password=os.environ['REDIS_PASSWORD'], ssl=True)

    try:
        return r.get(name).decode('utf-8')
    
    except:
        return None
    

def set_cache(name, value, expire=3600):
    r = redis.Redis(host=os.environ['REDIS_HOST'], port=int(os.environ['REDIS_PORT']), password=os.environ['REDIS_PASSWORD'], ssl=True)

    try:
        return r.set(name=name, value=value, ex=expire)

    except:
        return False
    

def scan_cache(match):
    r = redis.Redis(host=os.environ['REDIS_HOST'], port=int(os.environ['REDIS_PORT']), password=os.environ['REDIS_PASSWORD'], ssl=True)
    names = []

    try:
        for name in r.scan(match=match)[1]:
            names.append(name.decode('utf-8'))

        return names
    
    except:
        return []


def delete_cache(names):
    r = redis.Redis(host=os.environ['REDIS_HOST'], port=int(os.environ['REDIS_PORT']), password=os.environ['REDIS_PASSWORD'], ssl=True)

    try:
        return r.delete(*names)

    except:
        return -1

