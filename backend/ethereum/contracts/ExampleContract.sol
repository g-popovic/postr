// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract ExampleContract {
    uint public number = 0;

    function setNumber(uint _number) public {
        number = _number;
    }
}