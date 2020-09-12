// Array of chords with specified fingerings for each string
const chordShape = [
    {
        chordName: 'Tuning',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 0, 0, 0]
    },
    {
        chordName: 'Emajor',
        // Each nested array represnts a string with four frets. The index of each array indicates the fret, and the number indicates which left hand finger should be used in that fret. The first nested array is the first (highest) string, the last is the sixth (lowest) string.
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],

        // The six open strings, indicating which should be included in each chord. The 0 denotes that the string should be left open, the 1 means there is a fretted note so no open string, the -1 means it should be muted and not included in the chord.
        openStrings: [0, 0, 1, 1, 1, 0],

        // The sound of the full chord strummed. This audio is triggered by the 'play' button.
        chordAudio: './audio/chords/Emajor.mp3',

        // The sound of each individual note of the chord. This audio is triggered by moving the mouse over each individual string once a chord is selected.
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
        chordAudio: './audio/chords/F#major7.mp3',
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

const populateForm = () => {

    chordShape.forEach((chord) => {
        $('#chord').append($('<option>', {
            value: chord.chordname,
            text: chord.chordName
        }))
    });
};

// Function for clearing the fingering on the fretboard
const clearFingerInput = (string, stringNumber, openStrings) => {

    $.each(string, function (index, note) {
        $(`.string-${stringNumber}-${index + 1}`).css('visibility', 'hidden');
    });

    $.each(openStrings, function (index, note) {
        $(`.string-${index + 1}-0`).css({ 'visibility': 'hidden', 'color': 'black' });
    })
}

// Function for inputing fingering on the fretboard
const fingerInput = (string, stringNumber, openStrings) => {

    $.each(string, function (index, note) {
        if (note !== 0) {
            $(`.string-${stringNumber}-${index + 1}`).css('visibility', 'visible').text(note);
        }
    });

    $.each(openStrings, function (index, note) {
        if (note === 0) {
            $(`.string-${index + 1}-0`).css('visibility', 'visible').text('O')
        } else if (note === -1) {
            $(`.string-${index + 1}-0`).css({ 'visibility': 'visible', 'color': 'red' }).text('X')
        }
    })
}

// Function that calls the clear DOM and update DOM functions with each string.
const fingersOnDOM = (chord) => {

    // Clear the fretboard/DOM fingering, one call for each string, including clearing the openString indicators on the initial call.
    clearFingerInput(chord.fingering[0], 1, chord.openStrings)
    clearFingerInput(chord.fingering[1], 2)
    clearFingerInput(chord.fingering[2], 3)
    clearFingerInput(chord.fingering[3], 4)
    clearFingerInput(chord.fingering[4], 5)
    clearFingerInput(chord.fingering[5], 6)

    // Update the fretboard/DOM with the new fingering. The fingerInput function is called once for each string, including the openString indicators on the inital call.
    fingerInput(chord.fingering[0], 1, chord.openStrings)
    fingerInput(chord.fingering[1], 2)
    fingerInput(chord.fingering[2], 3)
    fingerInput(chord.fingering[3], 4)
    fingerInput(chord.fingering[4], 5)
    fingerInput(chord.fingering[5], 6)
}

const chordAudio = (chord) => {

    strumAudio = new Audio(chord.chordAudio);

    strumAudio.play();
};

const stringAudio = (string) => {
    const noteAudio = new Audio(string)

    noteAudio.play();
};

$(function () {

    populateForm();

    // Delegated event handler on the <li> elements
    $('#chord').on('change', function (e) {
        // Get the value of the selected chord, ie. 'C', 'G', 'Am' etc...
        const chordSelected = $(this).val();

        // Updated the DOM to display the chord selected in the text container
        $('.audio-button').html(`${chordSelected}`)

        // Find the index of the selected chord in the chordShape array
        const chordSelection = chordShape.findIndex((chord) => {
            return chordSelected === chord.chordName
        })

        // Calling fingersonDOM function on the specific item in the chordShape array to display the fingering on the fretboard
        fingersOnDOM(chordShape[chordSelection])


        $('.audio-button').on('click', function (e) {
            // Updating the play button with the correct chord audio
            chordAudio(chordShape[chordSelection])

        })

        // Updating each string with the respective note in each chord
        $('.string-1').on('mouseenter', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[0])
        })
        $('.string-2').on('mouseenter', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[1])
        })
        $('.string-3').on('mouseenter', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[2])
        })
        $('.string-4').on('mouseenter', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[3])
        })
        $('.string-5').on('mouseenter', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[4])
        })
        $('.string-6').on('mouseenter', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[5])
        })

    });


});