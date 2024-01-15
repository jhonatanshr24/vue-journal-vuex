
export default () => ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Aliqua ullamco duis commodo commodo ad amet est exercitation cupidatat.',
            picture: null
        },

        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Adipisicing ullamco mollit aute commodo magna.',
            picture: null
        },

        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Excepteur ipsum adipisicing sunt est culpa excepteur magna laborum do occaecat laboris ea.',
            picture: null
        },

    ]
})