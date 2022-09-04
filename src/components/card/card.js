export default{
    name: "card",
    data(){
        return{
            isShowNFT: true
        }
    },
    methods:{
        showNft(){
            this.isShowNFT = !this.isShowNFT
        }
    }
}