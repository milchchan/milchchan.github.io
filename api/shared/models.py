from sqlalchemy import Column, Integer, Float, String, Text, DateTime
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Word(Base):
    __tablename__ = 'words'
    id = Column('id', Integer(), primary_key=True, nullable=False)
    name = Column('name', String(256), nullable=False)
    language = Column('language', String(3), nullable=True)
    random = Column('random', Float(), nullable=False)
    timestamp = Column('timestamp', DateTime(), nullable=False)


class Upload(Base):
    __tablename__ = 'uploads'
    id = Column('id', Integer(), primary_key=True, nullable=False)
    url = Column('url', Text(), nullable=False)
    type = Column('type', String(256), nullable=False)
    random = Column('random', Float(), nullable=False)
    timestamp = Column('timestamp', DateTime(), nullable=False)
