import { useMoralis } from "react-moralis"
import { useEffect } from "react"

const Header = () => {
    const { enableWeb3, account, isWeb3Enabled } = useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== undefined) {
            if(window.localStorage.getItem("connected")){
                enableWeb3()
            }
        }
       
    }, [isWeb3Enabled])

    return (
        <div className="bg-green-200 h-[5rem]">
            {account ? (
                <div>
                    {" "}
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 6)}{" "}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if(typeof window !== undefined){
                            window.localStorage.setItem("connected", "inject")
                        }

                    }}
                    className="py-2 px-4 bg-red-600 text-white font-semibold 
            rounded-lg shadow-md hover:bg-black 
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Connect
                </button>
            )}
        </div>
    )
}

export default Header
