// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
            activeContact: 0,
            newMessage: '',
            whoFind: '',
            showOption: [],
            emoji:[
                '&#128512',
                '&#128513',
                '&#128514',
                '&#128515',
                '&#128516',
                '&#128517',
                '&#128518',
                '&#128519',
                '&#128520',
                '&#128521',
                '&#128522',
                '&#128523',
                '&#128524',
            ],
            flagEmoji: false,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]  
        };
    },
    methods: {
        //creo una data prendendola dall'oggetto new Date
        createDate(){
            const dateMsg = new Date();
            const year = dateMsg.getFullYear();
            const month = this.checkDouble(dateMsg.getMonth() + 1);
            const day = this.checkDouble(dateMsg.getDate());
            const hours = this.checkDouble(dateMsg.getHours());
            const minuts = this.checkDouble(dateMsg.getMinutes());
            const seconds = this.checkDouble(dateMsg.getSeconds());
            //potevo usare la funzione stringa.padstart(2, 0) per aggiungere 0
            return("'" + day + "/" + month + "/"+ "/"+ year + " "+ hours + ":" + minuts + ":" + seconds + "'")
        },
        //controllo dato in input una parte della data che sia doppia cifra
        checkDouble(myData){
            myData = myData.toString();
            if (myData.length < 2){
                myData = "0" + myData;
            }
            return myData
        },
        sendMessage(){ 
            if(this.newMessage.trim().length > 0){
               this.contacts[this.activeContact].messages.push({
                date: this.createDate(),
                message: this.newMessage,
                status: 'sent'
                })
                setTimeout(() => this.receivedMessage(), 1000);
            }
            this.newMessage = "";
        },
        receivedMessage(){
            this.contacts[this.activeContact].messages.push({
                date: this.createDate(),
                message: 'ok',
                status: 'received'
            })
        },
        searchContact(){      
            //reset all obj visible true
            if(this.whoFind.trim()==""){
                for (let i = 0; i < this.contacts.length; i++) {
                    this.contacts[i].visible = true;
                }
            }
            else{ 
                //ricerca parola
                for (let i = 0; i < this.contacts.length; i++) {
                    const name = this.contacts[i].name.toLowerCase();
                    this.whoFind = this.whoFind.toLowerCase()
                    //imposto visible di tutti gli oggetti a false
                    if(name.includes(this.whoFind)){
                        this.contacts[i].visible=true;
                    }
                    else{
                        this.contacts[i].visible=false;
                    }
                }
            }
        },
        //funzione che mi permette di visualizzare l'opzione delete
        activeOption(index){
            if( index > 0){
                this.showOption = [];
                for (let j = 0; j < this.contacts[this.activeContact].messages.length; j++) {
                   this.showOption.push(false);
                }
                this.showOption[index] = true;
            }
        },
        //cancello il messaggio dall'array
        deleteMessage(index){
            this.contacts[this.activeContact].messages.splice(index, 1);
            this.showOption.splice(index,1);
            console.log("show option", this.showOption);
            console.log(" array contacts",this.contacts[this.activeContact].messages)
        },
        //estrapolo l'ultimo messaggio del contatto da vedere in rubrica
        lastMessage(index){
            const lastObjMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1];
            return lastObjMessage.message
        },
        //estrapolo e gestisco l'ora da visualizzare in rubrica dell'ultimo messaggio del contatto
        timeLastMessage(index){
            //salvataggio ultimo messaggio 
            const lastObjMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1];
            //estrapolazione data
            const date = lastObjMessage.date;
            //rompo la data in un array di 2 elementi
            const time = date.split(" ");
            //recupero la parte con ora:minuti:secondi
            const hour = time[1];
            const arraySupport = [];
            //ciclo per recuperare solo i minuti e le ore
            for (let j = 0; j < 5; j++) {
                arraySupport.push(hour[j])
            }
            //restituisco la stringa che mi occorre
            return arraySupport.join("")
            
        }
    },
    mounted(){
        setInterval(() => {
            this.showOption=[];
        }, 3000)
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');