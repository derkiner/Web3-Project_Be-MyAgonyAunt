   ![image](https://user-images.githubusercontent.com/90147636/164792960-e3a42cfd-b2d7-42b1-8a3f-c6d73e27e1e0.png)

   ![image](https://user-images.githubusercontent.com/90147636/164793601-a2c15108-d187-426a-9036-62a5e2a199ca.png)
         

## Near Protocol Sample Project => BE MY AGONY AUNT!

To be able to understand the gist of this project, it is fundamental to know what an agony aunt does in general. Prior to the cutting-edge technological tools, people who experienced various problems in their day-to-day lives used to write their secrets to agony aunts who were columnists in newspapers and the main responsibility of those ladies was to give a piece of advice to those confessors. This way, those who shared their secrets and confessed the intimate parts of their lives used to feel a sense of relief at least to some extent. It is in fact still the case. Namely, the concept of 'agony aunts' still exists despite their decreasing number in today's world. Although it may seem a bit obsolete at first glance, it is not the case. Human beings are regarded as social creatures, but they may not prefer to share everything else with their beloved ones at times and in severe mental issues, it may sometimes be a challenge to afford psychiatric help. At this point, the idea of consulting an agony aunt is likely to be a reasonable solution. That being said, the advice that these vulnerable individuals get - in traditional sense - is from a human being at the end of the day and that piece of advice can be biased or simply the agony aunt concerned may not actually care the relevant person's problems and focuses on his/her financial gain.

   ![image](https://user-images.githubusercontent.com/90147636/164884014-514c61ed-1557-46b3-a8dd-cf61a21f390b.png)

Via this project, the objective is to re-create its modernised and reliable version on the blockchain. In the first place, the 'decentralised' nature of the platform will ensure further security for the clients and as such, the identities of those seeking help desperately will not be exposed. Secondly, the agony aunt will not be an individual person in the framework of this project. Instead, people from all walks of life will be able to share their recommendations regarding the related problem. Considering the fact that those who share similar problems tend to visit this platform just out of curiosity or just to find a solution to their own problems, the result will be win-win for both parties. Finally, this project (if it indeed takes place in the long run) can prevent the intrusive comments of the unwanted bullies thanks to the presence of the DAO (Decentralised Autonomous Organisations) that can construct a legal contract limiting such behavior patterns through certain precautions such as voting for the exclusion of those behaving inappropriately. It was once flawlessly uttered by the legal scholar, Oliver Wendell Holmes; “Your Liberty To Swing Your Fist Ends Where My Nose Begins”. This means that 'respect' will be the key word when it comes to the successful integration of this project.


(P.S: As advised by the Patika.dev team, `near-sdk-as` starter kit has been used as a boilerplate in this project; however, the codes in the folders => Simple & Singleton - Assembly - index.ts files have been created from scratch and as such original.The project was approved by Near Protocol.


## Regarding Specific Folders (where the actual codes live)

Within this repository formed in line with the Near Protocol, two separate AssemblyScript contracts exist in their own folders:

- **simple** in the `src/simple` folder
- **singleton** in the `src/singleton` folder

### Simple

An AssemblyScript contract is written in the "simple style" when the `index.ts` file (the contract entry point) includes a series of exported functions.


### Singleton

An AssemblyScript contract is written in the "singleton style" when the `index.ts` file (the contract entry point) has a single exported class that is decorated with `@nearBindgen`.

In this case, all methods on the class become public contract methods unless marked `private`.  Also, all instance variables are stored as a serialized instance of the class under a special storage key named `STATE`.  


## Installation

1. Clone the repo to the computer
(https://github.com/derkiner/Be_MyAgonyAunt.git)

2. Be in that specific folder (cd Be_MyAgonyAunt)

3. run `yarn` through the terminal

4. Log in your Near Account via the terminal
(login near)

5. Build the contract
(yarn build:release)

6. Deploy the contract
(yarn deploy)

7. Set up the development account $CONTRACT
export CONTRACT=<YOUR_DEV_ACCOUNT_HERE>


## How to use it

   - Declaring a New Confession:
near call $CONTRACT AddNewConfession '{"nickname":<Client's Preferred Pseudo Name>,"subject":<Confession Title>,"category":<Stating a Specific Confession Category>, "details":<Basic Details of the Confession>}' --accountId YOUR-ACCOUNT.testnet

   - Viewing a Specific Confession:
near view $CONTRACT getConfessionById '{"id":ConfessionId}' --accountId YOUR-ACCOUNT.testnet
   
   - Listing Some Confessions:
near view $CONTRACT getConfessions '{"offset":<Starting Point>,"limit":<TotalLimit>}' --accountId YOUR-ACCOUNT.testnet
   
  - Changing General Details of a Confession:
near call $CONTRACT updateConfession '{"id":CONFESSION ID,"updates":{"type":"<TypeOfConfession>","type":"<WHAT TYPE OF MOVIE>","description":"<DESCRIPTION ABOUT MOVIE>"}' --accountId YOUR-ACCOUNT.testnet
   
   - Terminating a Confession:
near call $CONTRACT deleteConfession '{"id":Confession Id}' --accountId YOUR-ACCOUNT.testnet
   
  - Writing a Recommendation for a Confessor:
near call $CONTRACT newAdvice '{"text":<ADVICE>,"confessionId":CONFESSION ID}' --accountId YOUR-ACCOUNT.testnet
   
   - Seeing & Listing Recommendations:
near call $CONTRACT obtainAdvice --accountId YOUR-ACCOUNT.testnet    /   near call $CONTRACT grabAdviceById '{"id":CONFESSION ID,"limit":<TOTAL NUMBER OF RECOMMENDATIONS>}' --accountId YOUR-ACCOUNT.testnet


![image](https://user-images.githubusercontent.com/90147636/164883543-e8e985c4-a66d-4f23-94d6-fd608d8d3b0b.png)
   
   
   
   

