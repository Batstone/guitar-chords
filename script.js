// Inital app object
const guitarApp = {}

// Array of chords with specified fingerings for each string
guitarApp.chordData = [
    {
        chordName: 'E major',
        // Each nested array represnts a string with four frets. The index of each array indicates the fret, and the number inside indicates which left hand finger should be used in that fret. The first nested array is the first (highest) string, the last is the sixth (lowest) string
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],

        // The six open strings, indicating which open string should be included in each chord. The 0 denotes that the string should be left open, 1 indicates there is a fretted note so the string should not be left open, the -1 means it should be muted and not included in the chord
        openStrings: [0, 0, 1, 1, 1, 0],

        // The sound of the full chord strummed. This audio is triggered by the '.audio-button'
        chordAudio: './audio/chords/Emajor.mp3',

        // The sound of each individual note of the chord. This audio is triggered by moving the mouse over each individual string once a chord is selected
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3'],

        // The chordDescription text is used for screen readers only.
        chordDescription: 'sixth string open, fifth string second finger second fret, fourth string third finger second fret, third string first finger first fret, second string open, first string open'
    },
    {
        chordName: 'E minor',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 1, 1, 0],
        chordAudio: './audio/chords/Eminor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3'],
        chordDescription: 'sixth string open, fifth string second finger second fret, fourth string third finger second fret, third string open, second string open, first string open'
    },
    {
        chordName: 'E major7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 1, 1, 1, 0],
        chordAudio: './audio/chords/Emajor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3'],
        chordDescription: 'sixth string open, fifth string third finger second fret, fourth string first finger first fret, third string second finger first fret, second string open, first string open'
    },
    {
        chordName: 'E 7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 1, 0, 1, 0],
        chordAudio: './audio/chords/E7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3'],
        chordDescription: 'sixth string open, fifth string second finger second fret, fourth string open, third string first finger first fret, second string open, first string open'
    },
    {
        chordName: 'E minor7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 0, 0, 0],
        chordAudio: './audio/chords/Eminor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/E-6.mp3'],
        chordDescription: 'sixth string open, fifth string second finger second fret, fourth string open, third string open, second string open, first string open'
    },
    {
        chordName: 'A major',
        fingering: [[0, 0, 0, 0], [0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1],
        chordAudio: './audio/chords/Amajor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string open, fourth string second finger second fret, third string third finger second fret, second string fourth finger second fret, first string open'
    },
    {
        chordName: 'A minor',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1],
        chordAudio: './audio/chords/Aminor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string open, fourth string second finger second fret, third string third finger second fret, second string first finger first fret, first string open'
    },
    {
        chordName: 'A major7',
        fingering: [[0, 0, 0, 0], [0, 3, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1],
        chordAudio: './audio/chords/Amajor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string open, fourth string second finger second fret, third string first finger first fret, second string third finger second fret, first string open'
    },
    {
        chordName: 'A7',
        fingering: [[0, 0, 0, 0], [0, 3, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 0, -1],
        chordAudio: './audio/chords/A7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string open, fourth string second finger second fret, third string open, second string third finger second fret, first string open'
    },
    {
        chordName: 'A minor7',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 0, -1],
        chordAudio: './audio/chords/Aminor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/A-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string open, fourth string second finger second fret, third string open, second string first finger first fret, first string open'
    },
    {
        chordName: 'G major',
        fingering: [[0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0]],
        openStrings: [1, 1, 0, 0, 1, 1],
        chordAudio: './audio/chords/Gmajor.mp3',
        stringAudio: ['./audio/notes/G-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/G-6.mp3'],
        chordDescription: 'sixth string second finger third fret, fifth string first finger second fret, fourth string open, third string open, second string third finger third fret, first string fourth finger third fret'
    },
    {
        chordName: 'G minor',
        fingering: [[0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0]],
        openStrings: [1, 1, 1, 0, -1, 1],
        chordAudio: './audio/chords/Gminor.mp3',
        stringAudio: ['./audio/notes/G-1.mp3', './audio/notes/D-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/G-6.mp3'],
        chordDescription: 'sixth string first finger third fret, fifth string mute, fourth string open, third string second finger third fret, second string third finger third fret, first string fourth finger third fret'
    },
    {
        chordName: 'G major7',
        fingering: [[0, 0, 0, 0], [0, 0, 2, 0], [0, 0, 0, 3], [0, 0, 0, 4], [0, 0, 0, 0], [0, 0, 1, 0]],
        openStrings: [-1, 1, 1, 1, -1, 1],
        chordAudio: './audio/chords/Gmajor7.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/D-2.mp3', './audio/notes/B-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/empty.mp3', './audio/notes/G-6.mp3'],
        chordDescription: 'sixth string first finger third fret, fifth string mute, fourth string foruth finger fourth fret, third string third finger fourth fret, second string second finger third fret, first string mute'
    },
    {
        chordName: 'G7',
        fingering: [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0]],
        openStrings: [1, 0, 0, 0, 1, 1],
        chordAudio: './audio/chords/G7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/D-4.mp3', './audio/notes/B-5.mp3', './audio/notes/G-6.mp3'],
        chordDescription: 'sixth string third finger third fret, fifth string second finger second fret, fourth string open, third string open, second string fourth finger third fret, first string first finger first fret'
    },
    {
        chordName: 'G minor7',
        fingering: [[0, 0, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 0], [0, 0, 1, 0]],
        openStrings: [-1, 1, 1, 1, -1, 1],
        chordAudio: './audio/chords/Gminor7.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/D-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/F-4.mp3', './audio/notes/empty.mp3', './audio/notes/G-6.mp3'],
        chordDescription: 'sixth string first finger third fret, fifth string mute, fourth string second finger third fret, third string third finger third fret, second string fourth finger third fret, first string mute'
    },
    {
        chordName: 'C major',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 1, -1],
        chordAudio: './audio/chords/Cmajor.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string third finger third fret, fourth string second finger second fret, third string open, second string first finger first fret, first string open'
    },
    {
        chordName: 'C minor',
        fingering: [[0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0]],
        openStrings: [-1, 1, 0, 1, 1, -1],
        chordAudio: './audio/chords/Cminor.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/C-2.mp3', './audio/notes/G-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string fourth finger third fret, fourth string first finger first fret, third string open, second string second finger first fret, first string mute'
    },
    {
        chordName: 'C major7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 1, 1, -1],
        chordAudio: './audio/chords/Cmajor7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/B-2.mp3', './audio/notes/G-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string third finger third fret, fourth string second finger second fret, third string open, second string open, first string open'
    },
    {
        chordName: 'C7',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/C7.mp3',
        stringAudio: ['./audio/notes/E-1.mp3', './audio/notes/C-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string third finger third fret, fourth string second finger second fret, third string fourth finger third fret, second string first finger first fret, first string open'
    },
    {
        chordName: 'C minor7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 4], [0, 0, 3, 0], [1, 0, 0, 0], [0, 0, 2, 0], [0, 0, 0, 0]],
        openStrings: [-1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Cminor7.mp3',
        stringAudio: ['./audio/notes/empty.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string second finger third fret, fourth string first finger first fret, third string third finger third fret, second string fourth finger fourth fret, first string mute'
    },
    {
        chordName: 'D major',
        fingering: [[0, 2, 0, 0], [0, 0, 3, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dmajor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/D-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string mute, fourth string open, third string first finger second fret, second string third finger third fret, first string second finger second fret'
    },
    {
        chordName: 'D minor',
        fingering: [[1, 0, 0, 0], [0, 0, 3, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dminor.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/D-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string mute, fourth string open, third string second finger second fret, second string third finger third fret, first string first finger first fret'
    },
    {
        chordName: 'D major7',
        fingering: [[0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dmajor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string mute, fourth string open, third string second finger second fret, second string third finger second fret, first string fourth finger second fret'
    },
    {
        chordName: 'D7',
        fingering: [[0, 3, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/D7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string mute, fourth string open, third string second finger second fret, second string first finger first fret, first string third finger second fret'
    },
    {
        chordName: 'D minor7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1],
        chordAudio: './audio/chords/Dminor7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/D-4.mp3', './audio/notes/empty.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string mute, fourth string open, third string second finger second fret, second string first finger first fret, first string second finger first fret'
    },
    {
        chordName: 'F major',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fmajor.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/F-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3'],
        chordDescription: 'sixth string first finger first fret, fifth string third finger third fret, fourth string fourth finger fourth fret, third string second finger second fret, second string first finger first fret, first string first finger first fret'
    },
    {
        chordName: 'F minor',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fminor.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/F-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3'],
        chordDescription: 'sixth string first finger first fret, fifth string third finger third fret, fourth string fourth finger fourth fret, third string first finger second fret, second string first finger first fret, first string first finger first fret'
    },
    {
        chordName: 'F major7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 4, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fmajor7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3'],
        chordDescription: 'sixth string first finger first fret, fifth string fourth finger third fret, fourth string second finger third fret, third string third finger finger second fret, second string first finger first fret, first string first finger first fret'
    },
    {
        chordName: 'F7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [1, 0, 0, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/F7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3'],
        chordDescription: 'sixth string first finger first fret, fifth string third finger third fret, fourth string first finger first fret, third string second finger second fret, second string first finger first fret, first string first finger first fret'
    },
    {
        chordName: 'F minor7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fminor7.mp3',
        stringAudio: ['./audio/notes/F-1.mp3', './audio/notes/C-2.mp3', './audio/notes/Gsharp-3.mp3', './audio/notes/Dsharp-4.mp3', './audio/notes/C-5.mp3', './audio/notes/F-6.mp3'],
        chordDescription: 'sixth string first finger first fret, fifth string third finger third fret, fourth string first finger first fret, third string first finger first fret, second string first finger first fret, first string first finger first fret'
    },
    {
        chordName: 'B major',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 0, 0, 2], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bmajor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/B-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string first finger second fret, fourth string second finger fourth fret, third string third finger fourth fret, second string fourth finger fourth fret, first string first finger second fret'
    },
    {
        chordName: 'B minor',
        fingering: [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bminor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/D-2.mp3', './audio/notes/B-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string first finger second fret, fourth string third finger fourth fret, third string fourth finger fourth fret, second string second finger third fret, first string first finger second fret'
    },
    {
        chordName: 'B major7',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 2, 0], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bmajor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string first finger second fret, fourth string third finger fourth fret, third string second finger third fret, second string fourth finger fourth fret, first string first finger second fret'

    },
    {
        chordName: 'B7',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/B7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Dsharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string first finger second fret, fourth string third finger fourth fret, third string first finger second fret, second string fourth finger fourth fret, first string first finger second fret'
    },
    {
        chordName: 'B minor7',
        fingering: [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1],
        chordAudio: './audio/chords/Bminor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/D-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/B-5.mp3', './audio/notes/empty.mp3'],
        chordDescription: 'sixth string mute, fifth string first finger second fret, fourth string third finger fourth fret, third string first finger second fret, second string second finger third fret, first string first finger second fret'
    },
    {
        chordName: 'F# major',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fsharpmajor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3'],
        chordDescription: 'sixth string first finger second fret, fifth string third finger fourth fret, fourth string fourth finger fourth fret, third string second finger third fret, second string first finger second fret, first string second finger second fret'
    },
    {
        chordName: 'F# minor',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fsharpminor.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/Fsharp-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3'],
        chordDescription: 'sixth string first finger second fret, fifth string third finger fourth fret, fourth string fourth finger fourth fret, third string first finger second fret, second string first finger second fret, first string second finger second fret'
    },
    {
        chordName: 'F# major7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fsharpmajor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/F-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3'],
        chordDescription: 'sixth string first finger second fret, fifth string fourth finger fourth fret, fourth string second finger third fret, third string third finger third fret, second string first finger second fret, first string second finger second fret'
    },
    {
        chordName: 'F#7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fsharp7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/Asharp-3.mp3', './audio/notes/E-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3'],
        chordDescription: 'sixth string first finger second fret, fifth string third finger fourth fret, fourth string first finger second fret, third string second finger third fret, second string first finger second fret, first string second finger second fret'
    },
    {
        chordName: 'F# minor7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1],
        chordAudio: './audio/chords/Fsharpminor7.mp3',
        stringAudio: ['./audio/notes/Fsharp-1.mp3', './audio/notes/Csharp-2.mp3', './audio/notes/A-3.mp3', './audio/notes/E-4.mp3', './audio/notes/Csharp-5.mp3', './audio/notes/Fsharp-6.mp3'],
        chordDescription: 'sixth string first finger second fret, fifth string third finger fourth fret, fourth string first finger second fret, third string first finger second fret, second string first finger second fret, first string second finger second fret'
    },
]

// Function used to populate the dropdown menu with the chord selection options
guitarApp.populateForm = () => {
    guitarApp.chordData.forEach((chord) => {
        $('#chord').append($('<option>', {
            value: chord.chordname,
            text: chord.chordName
        }));
    });
};

// Function for clearing the fingering on the fretboard.
guitarApp.clearFingerInput = (string, stringNumber) => {
    $.each(string, function (index) {
        $(`.string-${stringNumber}-${index + 1}`).css('visibility', 'hidden');
    });
};

// Function for inputing fingering on the fretboard.
guitarApp.fingerInput = (string, stringNumber) => {
    $.each(string, function (index, note) {
        if (note !== 0) {
            $(`.string-${stringNumber}-${index + 1}`).css('visibility', 'visible').text(note);
        };
    });
};

// Function that calls the clear DOM and update DOM functions with each string.
guitarApp.fingersOnDOM = (chord) => {
    // Clear the fretboard/DOM fingering before updating it with the new fingering.
    chord.fingering.forEach((string, index) => {
        guitarApp.clearFingerInput(string, index + 1)
    });

    // Clearing the open string indications.
    chord.openStrings.forEach((note, index) => {
        $(`.string-${index + 1}-0`).css({ 'visibility': 'hidden', 'color': 'black' });
    });

    // Calling the fingerInput function for each string.
    chord.fingering.forEach((string, index) => {
        guitarApp.fingerInput(string, index + 1)
    });

    // Populating the DOM with the correct open string indications.
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
    if (typeof (guitarApp.strumAudio !== 'object')) {
        strumAudio = document.createElement('audio');

        strumAudio.addEventListener('loadeddata', () => {
            strumAudio.play();
        });
    };

    // Changing the src each time a new chord is selected, so that the correct audio file will play.
    strumAudio.setAttribute('src', chord.chordAudio)
};

guitarApp.stringAudio = (string) => {
    if (typeof (guitarApp.stringAudio !== 'object')) {
        noteAudio = document.createElement('audio');

        noteAudio.addEventListener('loadeddata', () => {
            noteAudio.play();
        })
    }

    // Changing the src each time a new chord is selected, so that the correct audio file will play.
    noteAudio.setAttribute('src', string);
};

guitarApp.stringColor = (string, chordIndex) => {
    // Since the string variable represents a class ie. .string-6, the number (last character) is sliced and decremented. StringNum is then utilized below as the index number when looking for specific values in the openString array.
    const stringNum = ((string.slice(-1)) - 1);

    // Making sure the background for each string is initally black.
    $(string).css('background', 'black');

    // storing that color in a variable.
    const originalStringColor = $(string).css('background');

    // Checking the openString array in chordData to see what color each string should be.
    if (guitarApp.chordData[chordIndex].openStrings[stringNum] === -1) {
        // The new string color based on the if statement.
        $(string).css('background', 'red');

        // setting the string back to its original color after 200 milliseconds.
        setTimeout(() => {
            $(string).css('background', originalStringColor)
        }, 200);

    } else {
        $(string).css('background', '#449DD1');

        setTimeout(() => {
            $(string).css('background', originalStringColor)
        }, 200);
    };
};

guitarApp.accessibilityText = (chord) => {
    // Storing the relevant information from the chord object.
    const chordName = chord.chordName
    const chordText = chord.chordDescription

    // Selecting the screen-reader only p tag and updating it with the relevant information so that the chord instructions can be read aloud.
    $('.chord-description').text(`${chordName}: ${chordText}`)
}


guitarApp.init = () => {
    // Calling the populateForm function to populate the dropdown menu with all the possible chord choices.
    guitarApp.populateForm();

    const guitarStrings = [];

    // For loop to populate the guitarStrings array with the class names of the six strings.
    for (let i = 1; i <= 6; i++) {
        guitarStrings.push(`.string-${i}`)
    };

    $(document).keypress(function (e) {
        // This allows the user to press a key ie. 'g' on the keyboard to trigger different chords. It takes the keycode of each keypress, converts it to a string and matches its index with a value in the chordData array. This currently only works for major chords, I will be implementing a means to select more advanced chords in the future.
        const selected = guitarApp.chordData.findIndex((chord) => {
            return chord.chordName.charAt(0).toLowerCase() === String.fromCharCode(e.keyCode)
        });

        // Using the index number that was matched above, we get the value of the specific chord in the chordData array.
        const chordSelected = guitarApp.chordData[selected].chordName;

        // Updating the dropdown form with the current selection.
        $('#chord').val(chordSelected);

        // Find the index of the selected chord in the chordData array.
        const chordIndex = guitarApp.chordData.findIndex((chord) => {
            return chordSelected === chord.chordName
        });

        // The current chord object stored in a variable .
        const currentChord = guitarApp.chordData[chordIndex]

        // Calling the accessibility text function.
        guitarApp.accessibilityText(currentChord)

        // Updated the DOM to display the chord selected in the text container.
        $('.audio-button').html(`${chordSelected}`).on('click', function (e) {
            // Updating the play button with the correct chord audio.
            guitarApp.chordAudio(currentChord)
        });

        // Calling fingersonDOM function on the specific item in the chordData array to display the fingering on the fretboard.
        guitarApp.fingersOnDOM(currentChord)

        // Creating an event listener on each string, using the guitarStrings array of class names, then calling the audio file for each string.
        guitarStrings.forEach((string, index) => {
            $(string).on('mouseenter', function (e) {
                guitarApp.stringColor(string, chordIndex);
                guitarApp.stringAudio(currentChord.stringAudio[index]);
            });
        });
    });

    // Event listener on the dropdown menu
    $('#chord').on('change', function (e) {
        // Get the value of the selected chord, ie. 'C', 'G', 'Am' etc...
        const chordSelected = $(this).val();

        // Find the index of the selected chord in the chordData array.
        const chordIndex = guitarApp.chordData.findIndex((chord) => {
            return chordSelected === chord.chordName
        });

        // The current chord object stored in a variable. 
        const currentChord = guitarApp.chordData[chordIndex]

        // Calling the accessibility text function.
        guitarApp.accessibilityText(currentChord)

        // Updated the DOM to display the chord selected in the text container.
        $('.audio-button').html(`${chordSelected}`).on('click', function (e) {
            // Updating the play button with the correct chord audio.
            guitarApp.chordAudio(guitarApp.chordData[chordIndex])
        });

        // Calling fingersonDOM function on the specific item in the chordData array to display the fingering on the fretboard.
        guitarApp.fingersOnDOM(guitarApp.chordData[chordIndex]);

        guitarStrings.forEach((string, index) => {
            $(string).on('mouseenter', function (e) {
                guitarApp.stringColor(string, chordIndex)
                guitarApp.stringAudio(guitarApp.chordData[chordIndex].stringAudio[index])

            });
        });
    });
};

// Calling the init function when the docuemnt is ready, omg!!!
$(function () {
    guitarApp.init()
});