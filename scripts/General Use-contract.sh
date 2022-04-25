#!/usr/bin/env bash


near call $CONTRACT AddNewConfession '{"nickname":<Client's Preferred Pseudo Name>,"subject":,"category":, "details":}' --accountId YOUR-ACCOUNT.testnet

near view $CONTRACT getConfessionById '{"id":ConfessionId}' --accountId YOUR-ACCOUNT.testnet

near view $CONTRACT getConfessions '{"offset":,"limit":}' --accountId YOUR-ACCOUNT.testnet

near call $CONTRACT updateConfession '{"id":Confession Id,"updates":{"type":"","type":"","description":""}' --accountId YOUR-ACCOUNT.testnet

near call $CONTRACT deleteConfession '{"id":Confession Id}' --accountId YOUR-ACCOUNT.testnet

near call $CONTRACT newAdvice '{"text":,"confessionId":Confession Id}' --accountId YOUR-ACCOUNT.testnet


