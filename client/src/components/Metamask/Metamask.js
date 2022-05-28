import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Button from "./button";

const Metamask = () => {
    function getLibrary(provider) {
        return new Web3(provider);
    }
    return (
        <div>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Button />
            </Web3ReactProvider>
        </div>
    );
};

export default Metamask;
