#!/bin/bash
echo *************************************************************************
echo Setting up the replica set                                            
echo *************************************************************************

sleep 15 | echo Waiting for the primary to start...
mongo mongodb://mongo1:27017  replicaSet.js

