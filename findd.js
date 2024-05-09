
const initialstate = [
    {
        userId: 1,
        name: "xyz",
        Password: "",
        board: [
            {
                id: 1,
                name: "newData",
                list: [
                    {
                        id: 1,
                        name: "task 1",
                        des: "description"
                    },
                    {
                        id: 2,
                        name: "task 2",
                        des: "description"
                    }
                ]
            }]
    },
    {
        userId: 2,
        name: "xyz",
        Password: "",
        board: [
            {
                id: 1,
                name: "newData",
                list: [
                    {
                        id: 1,
                        name: "task 1",
                        des: "description"
                    }
                ]
            }]
    }
]


const init = {
    users: [{
        userId: 1,
        name: "xyz",
        pssword: "wwwww"
    }],

    bords:[
        {
            userid:1,
            bordId:1,
        }
    ],

    list:[
        {
            listid:1,
            bordid:1,
        }
    ],

    cards:[
        {
            listid:1,
            cardid:1,
            title:"hello",
            description:"desc"
        }
    ]
}


function fin1(listid, cardid, newTitle){
    
        init.cards.map((card)=>{
            if(card.listid == listid && card.cardid == cardid){
                return card.title == newTitle
            }
        })
    
}



function findd(userid, bordid, listid) {

    initialstate.map((user) => {
        if (user.userId === userid) {
            user.board.map((bords) => {

            })
        }
        else {
            return user
        }
    })
}