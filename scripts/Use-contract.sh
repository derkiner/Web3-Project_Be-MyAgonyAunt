#!/usr/bin/env bash



echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Call 'view' functions on the contract"
echo
echo near view $CONTRACT getConfessionById '{"id":ConfessionId}' --accountId YOUR-ACCOUNT.testnet
echo near view $CONTRACT getConfessions '{"offset":,"limit":}' --accountId YOUR-ACCOUNT.testnet


echo
echo

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Call 'change' functions on the contract"
echo ---------------------------------------------------------
echo

# the following line fails with an error because we can't write to storage without signing the message
# --> FunctionCallError(HostError(ProhibitedInView { method_name: "storage_write" }))
# near view $CONTRACT write '{"key": "some-key", "value":"some value"}'
echo near call $CONTRACT AddNewConfession '{"nickname":<Client's Preferred Pseudo Name>,"subject":,"category":, "details":}' --accountId YOUR-ACCOUNT.testnet

echo near call $CONTRACT updateConfession '{"id":Confession Id,"updates":{"type":"","type":"","description":""}' --accountId YOUR-ACCOUNT.testnet

echo near call $CONTRACT deleteConfession '{"id":Confession Id}' --accountId YOUR-ACCOUNT.testnet

echo near call $CONTRACT newAdvice '{"text":,"confessionId":Confession Id}' --accountId YOUR-ACCOUNT.testnet

echo
echo "now run this script again to see changes made by this file"
exit 0


