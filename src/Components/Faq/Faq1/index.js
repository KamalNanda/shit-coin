import styled from 'styled-components'
import Answer from "../Faq4"

const Q1Wrapper =  styled.div`
// .faq-answer1{
//     min-height: 90vh;
//     display:flex;
//     flex-direction: column;
//     align-items:center !important;
//     justify-content:start;
//     grid-gap:2px;
//     list-style: none;
//     @media (max-width: 1660px){
//         padding-top:3.5rem;
//         padding-left:10%;
//         padding-right:10%;
        
//     }
// }
.w-90{
    width:100%;
}
.heading-answer{
    font-size: 35px;
    font-weight:400;
    line-height:42px;
    font-style:normal;
    text-transform:uppercase;
}
ul{
    padding-left:0 !important;
}

`
const Q1 = ()=>{
    const answers=[{
        heading:"ROYALTIES",
        answer:["each $hitcoin is minted with an embedded infinite diluting royalty contract which automatically adds secondary owners into the royalty distribution chain upon each sale, in perpetuity.","what this means: if you buy a $hitcoin and then sell it, your wallet hash will be forever added to the royalty distribution list within the smart contract of your $hitcoin.","as $hitcoins flip from wallet to wallet, a lineage of owners forms and the royalties from each successive sale of your $hitcoin will be evenly distributed among your growing owner lineage forever.","each $hitcoin smart contract contains provisions for 10% of each sale to be awarded as royalties to be distributed equallty among the 4 $hitcoin creators, the holy $hit dao, and the entire chain of secondary owners of a $hitcoin.",
        "there are no limits to how many times a $hitcoin can be owned, and a specific $hitcoin can be re-owned by a former owners same wallet, however an owners wallet can only be added to the royalty distribution list once"
        ]
    },
    {
        heading:"$HITCOINS, BIG $HITS, & $HITHEADS",
        answer:["the original minter of a $hitcoin may sell their $hitcoin and receive up to 9 replacement $hitcoin nfts.","when a $hitcoin is sold by its original minter, the minting wallet will receive an airdroped replacement big $hit NFT.",
        "your big $hit NFT will also contain the infinite diluting royalty contract.","you may sell your big $hit NFT to receive a second big $hit NFT.","you may sell your second big $hit NFT to receive a third big $hit NFT.",
        "you may sell your third big $hit NFT, but you will not receive a fourth big $hit NFT. instead you will receive your first $hithead nft,which will also contain the infinite diluting royalty contract.","$hithead NFTs can be sold for 2 replacement $hithead NFTs.there will be no replacement NTFs awarded after the third $hithead NFT is minted.",
        "in other words, your third $hithead nft is the final nft in your $hitcoin’s lineage."],
   
    },
    {
        heading:"PRIMARY OWNERS vs SECONDARY OWNERS",
        answer:["Only primary owners of a $hitcoin genesis token are eligeable for air-dropped replacemnts of their $hitcoin nfts. ","Secondary owners of $hitcoin nfts, be they $hitcoins, big $hits or $hitheads, are able to sell their nfts to gain inclusion on that nft’s inifinite diluting royalty contract, however, secondary sale owners are not eligeable for airdropped replacement nfts."]
}]
    return(
            <Q1Wrapper>
                <div className="faq-answer" >

                {answers.map((ans)=>{

                        return(
                        <div className="mt-5">
                        <Answer heading={ans.heading} answer={ans.answer} />
                        </div>
                        )
                })}
                </div>
                <div className="faq-answer" >
            <div className="heading-answer text-left w-90">NFT tokenomics</div>
            <ul>
                <li>1,111 $hitcoins will be minted<br />3,333 big $hit childen can be produced<br />6,666 $hithead grandchilden can be produced</li>
                <li>each shitcoin can produce enough offspring to become a lineage of up to 10 active holders.</li>
                <li>only 11,110 $hitcoin NFTs are possible.</li>
            </ul>
           
            <div className="heading-answer text-left w-90 mt-5">MINTING</div>
                <ul>
                    <li>shitcoins mint in 15 traunches:</li>
                    <li> I. 5 $hitcoins<br />
                II. 11 $hitcoins<br />
                III. 11 $hitcoins<br />
                IV. 25 $hitcoins<br />
                V. 51 $hitcoins<br />
                VI. 101 $hitcoins<br />
                VII. 101 $hitcoins<br />
                VIII. 101I $hitcoins<br />
                IX. 101 $hitcoins<br />
                X. 101 $hitcoins<br />
                XI. 101 $hitcoins<br />
                XII. 101 $hitcoins<br />
                XIII. 101 $hitcoins<br />
                XIV. 101 $hitcoins<br />
                XV. 99 $hitcoins<br/> 
                </li>
                <li>the first mint will open Soon<br /> </li>
                <li>the timing of the second mint, and each subsequent mint, will be determined by a 51% vote by the holy $hit dao, which is formed by all active $hitcoin holders. 
                </li>
                </ul>
                <div className="heading-answer text-left w-90 mt-5">HOLY SHIT DAO</div>
                <div className="mt-3">
                only active $hictoin token holders are given voting rights in the Holy Shit Dao. the shit dao votes upon the following:
                <ul className="mt-3">
                    <li style={{"list-style-type":"disc","margin-top":"unset","margin-bottom":"20px"}}>When the next traunch of genesis shitcoins are available for minting.</li>
                    <li style={{"list-style-type":"disc","margin-top":"unset","margin-bottom":"20px"}}>How to spend the dao treasury</li>

                    <li style={{"list-style-type":"disc","margin-top":"unset","margin-bottom":"20px"}}>Thats it</li>
                </ul>

                </div>

                
               

            </div>
            
            </Q1Wrapper>
    )
}

export default Q1