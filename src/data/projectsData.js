// Sample project data - Ganti dengan data proyek Anda sendiri
export const projectsData = [
    // Hardware Projects
    {
        category: 'hardware',
        title: 'OTP Lock System',
        description: 'A secure lock system for doors or drawers using One Time Password (OTP). The OTP is delivered to a Flutter mobile app and used to unlock. Built on ESP32 with MQTT communication.',
        technologies: ['ESP32', 'MQTT'],
        images: [
            require('../assets/images/otp/otp1.jpg')
        ],
        liveLink: '',
        githubLink: ''
    },
    {
        category: 'hardware',
        title: 'DC to AC Power Inverter',
        description: 'A college project focused on building a simple electronic circuit without programming. This inverter converts 12V DC power from a car cigarette lighter socket into 220V AC household power, enabling the use of standard electrical devices in vehicles. Built using basic electronic components and analog circuitry.',
        technologies: ['Analog Circuit', 'Transformer', 'Oscillator Circuit', 'MOSFET'],
        images: [
            require('../assets/images/inverter/inverter1.png'),
            require('../assets/images/inverter/inverter2.png')
        ],
        liveLink: '',
        githubLink: ''
    },

    // Software Projects
    {
        category: 'software',
        title: 'EV Charging Station Dashboard',
        description: 'A comprehensive dashboard developed for a client to monitor and control their EV charging stations. This testing dashboard provides real-time status monitoring, usage analytics, charging history, and remote control capabilities. Fully functional with OCPP 1.6 compliant charging stations, enabling seamless communication and management of the charging infrastructure.',
        technologies: ['OCPP 1.6', 'React', 'Node.js', 'WebSocket', 'REST API'],
        images: [
            require('../assets/images/ocpp/copp1.jpg'),
            require('../assets/images/ocpp/ocpp2.jpg'),
            require('../assets/images/ocpp/ocpp3.jpg')
        ],
        liveLink: '',
        githubLink: ''
    },

    // Mobile App Projects
    {
        category: 'mobile',
        title: 'OTP Lock System',
        description: 'Flutter mobile app to receive and manage OTP codes used to unlock the door/drawer. Communicates with the ESP32 device via MQTT.',
        technologies: ['Flutter'],
        images: [
            require('../assets/images/otp/otp2.png')
        ],
        liveLink: '',
        githubLink: ''
    }
];
