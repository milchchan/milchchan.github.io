from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Like(Base):
    __tablename__ = 'likes'
    id = Column('id', Integer(), primary_key=True, nullable=False)
    name = Column('name', String(255), nullable=False)
    content = Column('content', Text(), nullable=False)
    language = Column('language', String(3), nullable=True)
    timestamp = Column('timestamp', DateTime(), nullable=False)


class Attribute(Base):
    __tablename__ = 'attributes'
    id = Column('id', Integer(), primary_key=True, nullable=False)
    like_id = Column('like_id', Integer(), nullable=False)
    name = Column('name', String(255), nullable=False)
    start = Column('start', Integer(), nullable=False)
    end = Column('end', Integer(), nullable=False)


class Upload(Base):
    __tablename__ = 'uploads'
    id = Column('id', Integer(), primary_key=True, nullable=False)
    url = Column('url', Text(), nullable=False)
    type = Column('type', String(255), nullable=False)
    timestamp = Column('timestamp', DateTime(), nullable=False)
