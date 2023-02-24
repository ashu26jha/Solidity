// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./PriceConvertor.sol";
contract FundMe{
    using PriceConvertor for uint256;

    uint256 minimumUSD = 50 ;
    address [] public funders ;
    mapping (address => uint256) public addressToAmountFunded;

    address public owner ;

    constructor(){
        owner = msg.sender;
    }

    function fund () public payable {
        require ( msg.value.getConversionRate() > minimumUSD , "Not enough");
        funders.push(msg.sender);
    }

    function withdraw () public onlyOwner{
        require (msg.sender == owner, "You don't have access");
        for(uint256 fundIndex = 0 ; fundIndex < funders.length ; fundIndex++){
            addressToAmountFunded[funders[fundIndex]] = 0;   
        }
        funders = new address [] (0);
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call failed");
    }

    modifier onlyOwner {
        require(msg.sender == owner , "You don't have access");
        _;
    }
    
}
