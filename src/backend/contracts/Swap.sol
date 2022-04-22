//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
 
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';

contract Swap {

//Addresses for uniswap router and WETH contracts
address private constant UNISWAP_V3_ROUTER = 0xE592427A0AEce92De3Edee1F18E0157C05861564;
address private constant UNISWAP_V2_ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
uint24 public constant poolFee = 3000;

function swap(address _tokenIn, address _tokenOut, uint256 _amountIn, uint256 _amountOutMin, address _to) external {
    IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
    IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);

    address[] memory path;
    path = new address[](3);
    path[0] = _tokenIn;
    path[1] = WETH;
    path[2] = _tokenOut;

    IUniswapV2Router01(UNISWAP_V2_ROUTER).swapExactTokensForTokens(
        _amountIn,
        _amountOutMin,
        path,
        _to,
        block.timestamp
    );

    }
}
