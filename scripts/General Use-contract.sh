#!/usr/bin/env bash


near call $CONTRACT AddNewConfession '{"nickname":<Client's Preferred Pseudo Name>,"subject":,"category":, "details":}' --accountId YOUR-ACCOUNT.testnet

near view $CONTRACT getConfessionById '{"id":ConfessionId}' --accountId YOUR-ACCOUNT.testnet

near view $CONTRACT getConfessions '{"offset":,"limit":}' --accountId YOUR-ACCOUNT.testnet

near call $CONTRACT updateConfession '{"id":CONFESSION ID,"updates":{"type":"","type":"","description":""}' --accountId YOUR-ACCOUNT.testnet

near call $CONTRACT deleteConfession '{"id":Confession Id}' --accountId YOUR-ACCOUNT.testnet

near call $CONTRACT newAdvice '{"text":,"confessionId":CONFESSION ID}' --accountId YOUR-ACCOUNT.testnet

$CONTRACT obtainAdvice --accountId YOUR-ACCOUNT.testnet / near call $CONTRACT grabAdviceById '{"id":CONFESSION ID,"limit":}' --accountId YOUR-ACCOUNT.testnet

