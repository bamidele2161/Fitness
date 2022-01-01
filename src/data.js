import videoZero from './Videos/video.mp4'
import videoOne from './Videos/plank.mp4'
import situp from './Videos/situp.mp4'
import pushup from './Videos/pushup.mp4'
import squat from './Videos/squat.mp4'
import lunges from './Videos/lunges.mp4'
import tricep from './Videos/tricep.mp4'
const data = [
        {
            video: videoZero,
            name: 'push up',
            id: 1,
            rep: 20,
            set: 3,
            type: "hard",
            detail: "",
        },

        {
            video: tricep,
            name: 'Tricep',
            id: 2,
            rep: 20,
            set: 3,
            type: "hard",
        },

        {
            video: videoOne,
            name: 'Plank',
            id: 3,
            rep: 20,
            set: 3,
            type: "hard",
        },

        {
            video: situp,
            name: 'Sit Up',
            id: 4,
            rep: 10,
            set: 5,
            type: "hard",
        },

        {
            video: pushup,
            name: 'Push Up',
            id: 5,
            rep: 20,
            set: 5,
            type: "light",
        },

        {
            video: squat,
            name: 'bicep',
            id: 6,
            rep: 20,
            set: 5,
            type: "light",
        },


        {
            video: lunges,
            name: 'Lunges',
            id: 8,
            rep: 20,
            set: 5,
            type: "light",
        },

        {
            video: videoOne,
            name: 'Sit Up',
            id: 9,
            rep: 30,
            set: 5,
            type: "light",
        },

    ]

export default data;