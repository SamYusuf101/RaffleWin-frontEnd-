import React from "react"
import { ConnectButton } from "web3uikit"
import EnterLottery from "./EnterLottery"

const CheatHeader = () => {
    return (
        <div className="bg-green-200 h-[10rem] pl-5">
            Welcome to the Decentralised smartContract Lottery
            <div className="mt-5">
                <ConnectButton moralisAuth={false} />
                <EnterLottery />
            </div>
        </div>
    )
}

export default CheatHeader
