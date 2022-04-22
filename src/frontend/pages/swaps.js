import React from 'react';
import { Form, Button } from 'react-bootstrap'

const Swaps = () => {














  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh'
      }}
    >
      <Form>
          <div className='form-group'>
            <label for="swapToken" >Swap..</label><br/>
            <select id="swapToken" class="form-control"name="swapTokenList">
            <option selected>Choose...</option>
            <option>ETH</option>
            <option>BTC</option>
            <option>USDT</option>
            //TODO: add list of tokens dynamically
            </select>
          <label for="amount" > -> Amount: </label>
          <input type="number" id="amount"  class="form-control" name="SendAmount"placeholder="Enter Amount"/><br/>
          </div>

          <div className='form-group'>
            <label for="receiveToken" >For..</label><br/>
            <select id="receiveToken" class="form-control"name="receiveTokenList">
            <option selected>Choose...</option>
            <option>ETH</option>
            <option>BTC</option>
            <option>USDT</option>
            //TODO: add list of tokens dynamically
            </select>
          <label for="amount" > -> Amount: </label>
          <input type="number" id="amount"  class="form-control" name="SendAmount"placeholder="Enter Amount"/><br/>
          </div>
          <Button type="submit">Swap Tokens</Button>
        </Form>
    </div>
  );
};

export default Swaps;