import styled from 'styled-components'
const blur1 = "/assets/images/faq/blur1.png"
const blur2 = "/assets/images/faq/blur2.png"
const blur3 = "/assets/images/faq/blur3.png"
const blur4 = "/assets/images/faq/blur4.png"
const blur5 = "/assets/images/faq/blur5.png"
const r1 = "/assets/images/faq/r1.png"
const r2 = "/assets/images/faq/r2.png"
const r3 = "/assets/images/faq/r3.png"
const r4 = "/assets/images/faq/r4.png"
const r5 = "/assets/images/faq/r5.png"
const image = "/assets/images/faq/imag1.png"

const Q1Wrapper =  styled.div`
.position{
    display:flex;
    flex-direction:column;
    align-items: center;
    min-height:90vh;
    justify-content:start;
    grid-gap:2px;
    @media (max-width: 1660px){
        padding: 80px;
        padding-top:50px;
        padding-left:4%;
        padding-right:4%;
        
    }
    
}
.padding-top-3{
    padding-left:6%;
    padding-right:6%;
}
.mr-3{
    margin-right:4rem;
}
.value-box{
   margin-top:86px;
    width:70%;
    height:62px;

}
.row{
    width:100%;
    height:100%;
}
.image-1{
    height:700px;
    width:800px;
}
.text-light{
    color:white;
    background: rgba(75, 74, 74, 1);

    
}
.text-black{
    color:black;
    background: rgba(223, 223, 223, 1);


}
img{
    width:190px;
}
@media only screen and (max-width: 768px) {
    font-size: 12px;
    img{
        width:50px;
    }
    .image-1{
        width:293px;
        height:auto;
    }
}

`
const Answer2 = ()=>{
    return(
            <Q1Wrapper>
                <div className="position">
                <div className="mt-3 padding-top-3">
                90% of each $hitcoin sale goes to the owner. 10% of each $hitcoin sale is re-distributed as a royalty to the $hitcoin creators, the Shit DAO, and the provenance chain of custudy among former owners of that specific $hitcoin.
                </div>
                <div className="value-box">
                <div className="row">
                    <div className="col-2 text-light d-flex align-items-center justify-content-center">
                        10%
                    </div>
                    <div className="col-10 text-black d-flex align-items-center justify-content-center">
                        90%
                    </div>
                </div>
                </div>
                <div className="mt-5 padding-top-3">
                If you own a $hitcoin and you sell it, your wallet will be automatically added to the list of royalty distribution recipients. 
                </div>
                    <div className="d-flex align-items-center justify-content-around mt-5 ">
                    <div className="col-3">
                                <img src={blur1} />
                        </div>
                        <div className="col-3">
                                <img src={blur2} />
                        </div>
                        <div className="col-3">
                                <img src={blur3} />
                        </div>
                        <div className="col-3">
                                <img src={blur4} />
                        </div>
                        <div className="col-3">
                                <img src={blur5} />
                        </div>
                    </div> 
                    <div className="mt-5 padding-top-3">
                    The 10% royalty distribution is always divided evenly between the 4 $hitcoin creators + the holy shit dao + the primary sale owner + the lineage of all secondary sale owners into infinity.


                    </div>    
                    <div className="d-flex align-items-center justify-content-around mt-5 ">
                    <div className="col-3">
                                <img src={r1} />
                        </div>
                        <div className="col-3">
                                <img src={r2} />
                        </div>
                        <div className="col-3">
                                <img src={r3} />
                        </div>
                        <div className="col-3">
                                <img src={r4} />
                        </div>
                        <div className="col-3">
                                <img src={r5} />
                        </div>
                    </div> 
                    <div className="mt-5 mr-3 padding-top-3">
                    you might want to be thoughtful about who you sell your shit to.  
                    </div>
                    <div className="mt-5 padding-top-3">
                    every subsequent owner of your shitcoin will remain connected to you by lineage and by royalty distributions. 
                    </div>                
                    <div className="mt-5 padding-top-3">
                    as a genesis $hitcoin holder, you will have the opportunity to build a network of up to 10 people who are actively holding NFTs from within your lineage.
                    </div>
                    <div className="mt-5">
                    <img src={image} className="image-1"/>
                    </div>
                    <div className="mt-5 padding-top-3">
                     those who choose well will stand to benefit both from royalties and from a well honed network of active $hitcoin holders in their own lineage.
                    </div>
                </div>
            </Q1Wrapper>
    )
}

export default Answer2