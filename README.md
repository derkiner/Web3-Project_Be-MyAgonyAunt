   ![image](https://user-images.githubusercontent.com/90147636/164792960-e3a42cfd-b2d7-42b1-8a3f-c6d73e27e1e0.png)

   ![image](https://user-images.githubusercontent.com/90147636/164793601-a2c15108-d187-426a-9036-62a5e2a199ca.png)
         

## Near Protocole Sample Project => BE MY AGONY AUNT!

To be able to understand the gist of this project, it is fundamental to know what an agony aunt does in general. Prior to the cutting-edge technological tools, people who experienced various problems in their day-to-day lives used to write their secrets to agony aunts who were columnists in newspapers and the main responsibility of those ladies was to give a piece of advice to those confessors. This way, those who shared their secrets and confessed the intimate parts of their lives used to feel a sense of relief at least to some extent. It is in fact still the case. Namely, the concept of 'agony aunts' still exists despite their decreasing number in today's world. Although it may seem a bit obsolete at first glance, it is not the case. Human beings are regarded as social creatures, but they may not prefer to share everything else with their beloved ones at times and in severe mental issues, it may sometimes be a challenge to afford psychiatric help. At this point, the idea of consulting an agony aunt is likely to be a reasonable solution. That being said, the advice that these vulnerable individuals get - in traditional sense - is from a human being at the end of the day and that piece of advice can be biased or simply the agony aunt concerned may not actually care the relevant person's problems and focuses on his/her financial gain.

   ![image](https://user-images.githubusercontent.com/90147636/164884014-514c61ed-1557-46b3-a8dd-cf61a21f390b.png)

Via this project, the objective is to re-create its modernised and reliable version on the blockhain. In the first place, the 'decentralised' nature of the platform will ensure further security for the clients and as such, the identities of those seeking help desperately will not be exposed. Secondly, the agony aunt will not be an individual person in the framework of this project. Instead, people from all walks of life will be able to share their recommendations regarding the related problem. Considering the fact that those who share similar problems tend to visit this platform just out of curiosity or just to find a solution to their own problems, the result will be win-win for both parties. Finally, this project (if it indeed takes place in the long run) can prevent the intrusive comments of the unwanted bullies thanks to the presence of the DAO (Decentralised Autonomous Organisations) that can construct a legal contract limiting such behavior patterns through certain precautions such as voting for the exclusion of those behaving inappropriately. As it was once flawlessly uttered by the legal scholar, Oliver Wendell Holmes; "“Your Liberty To Swing Your Fist Ends Where My Nose Begins”. This means that 'respect' will be the key word in this application.



(P.S: As advised by the Patika.dev team, `near-sdk-as` Starter Kit has been used as a boilerplate in this project; however, the codes in the folders => Simple & Singleton - Assembly - index.ts files have been created from scratch and as such authentic.)



## Samples

This repository includes a complete project structure for AssemblyScript contracts targeting the NEAR platform.

The example here is very basic.  It's a simple contract demonstrating the following concepts:
- a single contract
- the difference between `view` vs. `change` methods
- basic contract storage

There are 2 AssemblyScript contracts in this project, each in their own folder:

- **simple** in the `src/simple` folder
- **singleton** in the `src/singleton` folder

### Simple

We say that an AssemblyScript contract is written in the "simple style" when the `index.ts` file (the contract entry point) includes a series of exported functions.

In this case, all exported functions become public contract methods.

```ts
// return the string 'hello world'
export function helloWorld(): string {}

// read the given key from account (contract) storage
export function read(key: string): string {}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {}

// private helper method used by read() and write() above
private storageReport(): string {}
```

### Singleton

We say that an AssemblyScript contract is written in the "singleton style" when the `index.ts` file (the contract entry point) has a single exported class (the name of the class doesn't matter) that is decorated with `@nearBindgen`.

In this case, all methods on the class become public contract methods unless marked `private`.  Also, all instance variables are stored as a serialized instance of the class under a special storage key named `STATE`.  AssemblyScript uses JSON for storage serialization (as opposed to Rust contracts which use a custom binary serialization format called borsh).

```ts
@nearBindgen
export class Contract {

  // return the string 'hello world'
  helloWorld(): string {}

  // read the given key from account (contract) storage
  read(key: string): string {}

  // write the given value at the given key to account (contract) storage
  @mutateState()
  write(key: string, value: string): string {}

  // private helper method used by read() and write() above
  private storageReport(): string {}
}
```



## Usage

### Getting started

(see below for video recordings of each of the following steps)

INSTALL `NEAR CLI` first like this: `npm i -g near-cli`

1. clone this repo to a local folder
2. run `yarn`
3. run `./scripts/1.dev-deploy.sh`
3. run `./scripts/2.use-contract.sh`
4. run `./scripts/2.use-contract.sh` (yes, run it to see changes)
5. run `./scripts/3.cleanup.sh`




![image](https://user-images.githubusercontent.com/90147636/164883543-e8e985c4-a66d-4f23-94d6-fd608d8d3b0b.png)
