import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import Web3 from 'web3';
import {AbiItem} from 'web3-utils';


class Bsc extends React.Component { 
  
  // testnet
  activateBSCSmartContract() {

  const web3 = new Web3();
  // .setProvider('https://data-seed-prebsc-1-s1.binance.org:8545')

  
  const contractAddress = '0xBa6fefeB324e31a5B976E69E794Ae15244df2D21';
  const abi: AbiItem =
    {
      inputs:[],
      name:"sayHello",
      outputs:[
        {
          internalType:"string",
          name:"",type:"string"
        }
      ],
      stateMutability:"pure",
      type:'function'
    };
  
  const contract = new web3.eth.Contract(abi, contractAddress);


  // console.log(contract.deploy());
  }

  render() {
    return (
      <Flex direction="row" justifyContent="space-around" gap="size-100">
        <div>HEre my bsc</div>
        <div>HEre my bsc</div>
        <button onClick={() => this.activateBSCSmartContract()}>click here to activate smart contract</button>
      </Flex>
    );
  }
}

export default Bsc;
