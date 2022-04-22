import React from 'react';
import { Row, Form, Button } from 'react-bootstrap'

const Transactions = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh'
      }}
    >
          <form>
          <div className='form-group'>
          <label for="address" >Address To:</label><br/>
          <input type="text" id="address"  class="form-control" name="AddressTo"placeholder="Enter Address"/><br/>
          </div>
          <div className='form-group'>
          <label for="amount" >Amount:</label><br/>
          <input type="number" id="amount"  class="form-control" name="SendAmount"placeholder="Enter Amount"/><br/>
          </div>
          <div className="form-group">
          <label for="fee">Gas Fee:</label><br/>
          <input type="number" id="fee" class="form-control" name="GasFee"placeholder="Enter Fee"/><br/>
          </div>
          <Button type="submit">Send Transaction</Button>
        </form>
    </div>
  );
};

export default Transactions