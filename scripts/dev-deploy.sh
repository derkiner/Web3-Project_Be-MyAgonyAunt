#!/usr/bin/env bash

echo
echo ---------------------------------------------------------
echo "Step 1: Build the NearProtocol-Project-Be_MyAgony Aunt contract"
echo ---------------------------------------------------------
echo

yarn build

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Deploy the contract"
echo
echo "(edit scripts/1.dev-deploy.sh to deploy other contract)"
echo ---------------------------------------------------------
echo

# uncomment out the line below to deploy the other example contract
# near dev-deploy ./build/debug/simple.wasm

# comment the line below to deploy the other example contract
near dev-deploy ./build/debug/singleton.wasm

echo
echo
echo ---------------------------------------------------------
echo "Step 3: Prepare your environment for next steps"
echo
echo "(a) find the contract (account) name in the message above"
echo "    it will look like this: [ Account id: dev-###-### ]"
echo
echo "(b) set an environment variable using this account name"
echo "    see example below (this may not work on Windows)"
echo
echo ---------------------------------------------------------
echo 'export CONTRACT=<dev-123-456>'
# uncomment this line for a useful hint when using the singleton style
# echo "near call \$CONTRACT init --accountId \$CONTRACT"
echo ---------------------------------------------------------


exit 0
