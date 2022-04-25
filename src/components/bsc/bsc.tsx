import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import abiJson from './abi.json';
import { Button } from 'react-bootstrap';

/**
 * Use of smart contract deployed on bsc testnet
 */

/** use generics to handle the data binding in react */
class Bsc extends React.Component<any, any> {
  // define some constants
  private readonly bscTestnet = 'https://data-seed-prebsc-1-s1.binance.org:8545';
  private readonly contractAddress = '0xBa6fefeB324e31a5B976E69E794Ae15244df2D21';

  /**
   * Essential to change the state inside the component
   */
  constructor(props: any) {
    super(props);
    this.state = {
      contractResponse: '',
      activationEsit: 'primary'
    };
  }

  /**
   * Step by step comments. Core function
   */
  activateBSCSmartContract() {
    // create new instance of the library that handles smart contracts
    const web3 = new Web3();
    // otherwise the smart contract cannot be read
    web3.setProvider(this.bscTestnet);
    // retrieve smart contract by passing abi and contractAddress
    const contract = new web3.eth.Contract(abiJson as AbiItem[], this.contractAddress);
    // call the example function
    contract.methods
      .sayHello()
      .call()
      .then((data: any) => {
        // update the DOM
        this.setState({ contractResponse: data, activationEsit: 'success' });
      });
  }

  render() {
    return (
      <Flex direction="row" justifyContent="space-around" gap="size-100">
        <Button variant={this.state.activationEsit} onClick={() => this.activateBSCSmartContract()}>
          run smart contract
        </Button>
        <div>{this.state.contractResponse}</div>
      </Flex>
    );
  }
}

export default Bsc;
