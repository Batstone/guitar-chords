// Inital app object
const guitarApp = {}

// Array of chords with specified fingerings for each string
guitarApp.chordData = [
    {
        chordName: 'Tuning',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 0, 0, 0]
    },
    {
        chordName: 'Emajor',
        // Each nested array represnts a string with four frets. The index of each array indicates the fret, and the number inside indicates which left hand finger should be used in that fret. The first nested array is the first (highest) string, the last is the sixth (lowest) string
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],

        // The six open strings, indicating which open string should be included in each chord. The 0 denotes that the string should be left open, 1 indicates there is a fretted note so the string should not be left open, the -1 means it should be muted and not included in the chord
        openStrings: [0, 0, 1, 1, 1, 0],

        // The sound of the full chord strummed. This audio is triggered by the '.audio-button'
        chordAudio: './audio/chords/Emajor.mp3',

        // The sound of each individual note of the chord. This audio is triggered by moving the mouse over each individual string once a chord is selected
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3']
    },
    {
        chordName: 'Eminor',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 1, 1, 0],
        chordAudio: './audio/chords/Eminor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3']
    },
    {
        chordName: 'Emajor7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 1, 1, 1, 0],
        chordAudio: './audio/chords/Emajor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3']
    },
    {
        chordName: 'E7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 1, 0, 1, 0],
        chordAudio: './audio/chords/E7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3']
    },
    {
        chordName: 'Eminor7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 0, 0, 0],
        chordAudio: './audio/chords/Eminor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3']
    },
    {
        chordName: 'Amajor',
        fingering: [[0, 0, 0, 0], [0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1],
        chordAudio: './audio/chords/Amajor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Aminor',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1],
        chordAudio: './audio/chords/Aminor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Amajor7',
        fingering: [[0, 0, 0, 0], [0, 3, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1],
        chordAudio: './audio/chords/Amajor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'A7',
        fingering: [[0, 0, 0, 0], [0, 3, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 0, -1],
        chordAudio: './audio/chords/A7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Aminor7',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 0, -1],
        chordAudio: './audio/chords/Aminor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Gmajor',
        fingering: [[0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0]],
        openStrings: [1, 1, 0, 0, 1, 1],
        chordAudio: './audio/chords/Gmajor.mp3',
        stringAudio: ['./audio/notes/G-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/G-6.mp3']
    },
    {
        chordName: 'Gminor',
        fingering: [[0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0]],
        openStrings: [1, 1, 1, 0, -1, 1],
        chordAudio: './audio/chords/Gminor.mp3',
        stringAudio: ['./audio/notes/G-1.mp3', './audio/notes/D-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/G-6.mp3']
    },
    {
        chordName: 'Gmajor7',
        fingering: [[0, 0, 0, 0], [0, 0, 2, 0], [0, 0, 0, 3], [0, 0, 0, 4], [0, 0, 0, 0], [0, 0, 1, 0]],
        openStrings: [-1, 1, 1, 1, -1, 1],
        chordAudio: './audio/chords/Gmajor7.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/D-2.mp3', './audio/notes/B-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/empty.mp3', './audio/notes/G-6.mp3']
    },
    {
        chordName: 'G7',
        fingering: [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0]],
        openStrings: [1, 0, 0, 0, 1, 1],
        chordAudio: './audio/chords/G7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/G-6.mp3']
    },
    {
        chordName: 'Gminor7',
        fingering: [[0, 0, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 0], [0, 0, 1, 0]],
        openStrings: [-1, 1, 1, 1, -1, 1],
        chordAudio: './audio/chords/Gminor7.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/D-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/F-4.mp3', './audio/notes/empty.mp3', './audio/notes/G-6.mp3']
    },
    {
        chordName: 'Cmajor',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 1, -1],
        chordAudio: './audio/chords/Cmajor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Cminor',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0]],
        openStrings: [-1, 1, 0, 1, 1, -1],
        chordAudio: './audio/chords/Cminor.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/C-2.mp3', './audio/notes/G-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Cmajor7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 1, 1, -1],
        chordAudio: './audio/chords/Cmajor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3']

    },
    {
        chordName: 'C7',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/C7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Cminor7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 4], [0, 0, 3, 0], [1, 0, 0, 0], [0, 0, 2, 0], [0, 0, 0, 0]],
        openStrings: [-1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Cminor7.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Dmajor',
        fingering: [[0, 2, 0, 0], [0, 0, 3, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dmajor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/D-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Dminor',
        fingering: [[1, 0, 0, 0], [0, 0, 3, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dminor.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/D-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Dmajor7',
        fingering: [[0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dmajor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'D7',
        fingering: [[0, 3, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/D7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Dminor7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dminor7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Fmajor',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fmajor.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/F-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3']
    },
    {
        chordName: 'Fminor',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fminor.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/F-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3']
    },
    {
        chordName: 'Fmajor7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 4, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fmajor7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3']
    },
    {
        chordName: 'F7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [1, 0, 0, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/F7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3']
    },
    {
        chordName: 'Fminor7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fminor7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3']
    },
    {
        chordName: 'Bmajor',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 0, 0, 2], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bmajor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/B-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Bminor',
        fingering: [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bminor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/D-2.mp3', './audio/notes/B-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Bmajor7',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 2, 0], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bmajor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3']

    },
    {
        chordName: 'B7',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/B7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'Bminor7',
        fingering: [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bminor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/D-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3']
    },
    {
        chordName: 'F#major',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/F#major.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3']
    },
    {
        chordName: 'F#minor',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/F#minor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3']
    },
    {
        chordName: 'F#major7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fsharpmajor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/F-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3']
    },
    {
        chordName: 'F#7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/F#7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3']
    },
    {
        chordName: 'F#minor7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/F#minor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3']
    },
]

// Function used to populate the dropdown menu with the chord selection options
guitarApp.populateForm = () => {

    guitarApp.chordData.forEach((chord) => {
        $('#chord').append($('<option>', {
            value: chord.chordname,
            text: chord.chordName
        }))
    });
};

// Function for clearing the fingering on the fretboard
guitarApp.clearFingerInput = (string, stringNumber) => {

    $.each(string, function (index, note) {
        $(`.string-${stringNumber}-${index + 1}`).css('visibility', 'hidden');
    });
};

// Function for inputing fingering on the fretboard
guitarApp.fingerInput = (string, stringNumber) => {

    $.each(string, function (index, note) {
        if (note !== 0) {
            $(`.string-${stringNumber}-${index + 1}`).css('visibility', 'visible').text(note);
        }
    });
};

// Function that calls the clear DOM and update DOM functions with each string
guitarApp.fingersOnDOM = (chord) => {

    // Clear the fretboard/DOM fingering before updating it with the new fingering
    chord.fingering.forEach((string, index) => {
        guitarApp.clearFingerInput(string, index + 1)
    })

    // Clearing the open string indications
    chord.openStrings.forEach((note, index) => {
        $(`.string-${index + 1}-0`).css({ 'visibility': 'hidden', 'color': 'black' });
    });

    // Calling the fingerInput function for each string
    chord.fingering.forEach((string, index) => {
        guitarApp.fingerInput(string, index + 1)
    })

    // Populating the DOM with the correct open string indications
    chord.openStrings.forEach((note, index) => {
        if (note === 0) {
            $(`.string-${index + 1}-0`).css('visibility', 'visible').text('O')
        } else if (note === -1) {
            $(`.string-${index + 1}-0`).css({ 'visibility': 'visible', 'color': 'red' }).text('X')
        }
    });

};

// These two variables are initalized as an empty string and are then redefined insie the ChordAudio and StringAudio functions as new Audio() objects.
guitarApp.strumAudio = ''
guitarApp.noteAudio = ''

guitarApp.chordAudio = (chord) => {

    if (typeof (guitarApp.strumAudio != 'object')) {
        strumAudio = document.createElement('audio');

        strumAudio.addEventListener('loadeddata', () => {
            strumAudio.play();
        })
    }

    // Changing the src each time a new chord is selected, so that the correct audio file wil play.
    strumAudio.setAttribute('src', chord.chordAudio)
};

guitarApp.stringAudio = (string) => {

    if (typeof (guitarApp.stringAudio != 'object')) {
        noteAudio = document.createElement('audio');

        noteAudio.addEventListener('loadeddata', () => {
            noteAudio.play();
        })
    }

    // Changing the src each time a new chord is selected, so that the correct audio file wil play.
    noteAudio.setAttribute('src', string);
};

guitarApp.stringColor = (string) => {

    const originalStringColor = $(string).css('background')

    $(string).css('background', '#449DD1')

    setTimeout(() => {
        $(string).css('background', originalStringColor)
    }, 300)
};

guitarApp.init = () => {

    // Calling the populateForm function to populate the dropdown menu with all the possible chords.
    guitarApp.populateForm();

    const guitarStrings = [];

    // For loop to populate the guitarStrings array with the class names of the six strings.
    for (let i = 1; i <= 6; i++) {
        guitarStrings.push(`.string-${i}`)
    };

    $(document).keypress(function (e) {

        // This allows the user to press a key ie. 'g' on the keyboard to trigger different chords. It takes the keycode of each keypress, converts it to a string and matches its index with a value in the chordData array.
        const selected = guitarApp.chordData.findIndex((chord) => {
            return chord.chordName.charAt(0).toLowerCase() === String.fromCharCode(e.keyCode)
        })

        // Using the index number that was matched above, we get the value of the specific chord in the chordData array
        let chordSelected = guitarApp.chordData[selected].chordName

        // Updating the dropdown form with the current selection
        $('#chord').val(chordSelected)

        // Find the index of the selected chord in the chordData array
        const chordIndex = guitarApp.chordData.findIndex((chord) => {
            return chordSelected === chord.chordName
        })

        // Updated the DOM to display the chord selected in the text container
        $('.audio-button').html(`${chordSelected}`).on('click', function (e) {
            // Updating the play button with the correct chord audio
            guitarApp.chordAudio(guitarApp.chordData[chordIndex])
        })

        // Calling fingersonDOM function on the specific item in the chordData array to display the fingering on the fretboard
        guitarApp.fingersOnDOM(guitarApp.chordData[chordIndex])

        // Creating an event listener on each string, using the guitarStrings array of class names, then calling the audio file for each string
        guitarStrings.forEach((string, index) => {

            $(string).on('mouseenter', function (e) {
                guitarApp.stringColor(string)
                guitarApp.stringAudio(guitarApp.chordData[chordIndex].stringAudio[index])
            })

        });
    });

    // Event listener on the dropdown menu
    $('#chord').on('change', function (e) {

        // Get the value of the selected chord, ie. 'C', 'G', 'Am' etc...
        let chordSelected = $(this).val();

        // Find the index of the selected chord in the chordData array
        const chordIndex = guitarApp.chordData.findIndex((chord) => {
            return chordSelected === chord.chordName
        })

        // Updated the DOM to display the chord selected in the text container
        $('.audio-button').html(`${chordSelected}`).on('click', function (e) {
            // Updating the play button with the correct chord audi
            guitarApp.chordAudio(guitarApp.chordData[chordIndex])
        })

        // Calling fingersonDOM function on the specific item in the chordData array to display the fingering on the fretboard
        guitarApp.fingersOnDOM(guitarApp.chordData[chordIndex])

        guitarStrings.forEach((string, index) => {

            $(string).on('mouseenter', function (e) {
                guitarApp.stringColor(string)
                guitarApp.stringAudio(guitarApp.chordData[chordIndex].stringAudio[index])

            });
        });
    });
}

// Calling the init function when the docuemnt is ready!!!
$(function () {
    guitarApp.init()
});