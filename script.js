// Array of chords with specified fingerings for each string
const chordShape = [
    {
        chordName: 'Tuning',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 0, 0, 0]
    },
    {
        chordName: 'E',
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
        chordName: 'Em',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 1, 1, 0]
    },
    {
        chordName: 'EM7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 1, 1, 1, 0]
    },
    {
        chordName: 'E7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 1, 0, 1, 0]
    },
    {
        chordName: 'Em7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 0, 0, 0]
    },
    {
        chordName: 'A',
        fingering: [[0, 0, 0, 0], [0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1]
    },
    {
        chordName: 'Am',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1]
    },
    {
        chordName: 'AM7',
        fingering: [[0, 0, 0, 0], [0, 3, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 0, -1]
    },
    {
        chordName: 'A7',
        fingering: [[0, 0, 0, 0], [0, 3, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 0, -1]
    },
    {
        chordName: 'Am7',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 0, -1]
    },
    {
        chordName: 'G',
        fingering: [[0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0]],
        openStrings: [1, 1, 0, 0, 1, 1]
    },
    {
        chordName: 'Gm',
        fingering: [[0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0]],
        openStrings: [1, 1, 1, 0, -1, 1]
    },
    {
        chordName: 'GM7',
        fingering: [[0, 2, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 3, 0]],
        openStrings: [1, 1, 0, 0, 1, 1]
    },
    {
        chordName: 'G7',
        fingering: [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0]],
        openStrings: [1, 0, 0, 0, 1, 1]
    },
    {
        chordName: 'Gm7',
        fingering: [[0, 0, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0], [0, 0, 3, 0], [1, 0, 0, 0], [0, 0, 2, 0]],
        openStrings: [-1, 1, 0, 1, 1, 1]
    },
    {
        chordName: 'C',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 0, 1, 1, -1]
    },
    {
        chordName: 'Cm',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0]],
        openStrings: [-1, 1, 0, 1, 1, -1]
    },
    {
        chordName: 'CM7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 1, 1, -1]

    },
    {
        chordName: 'C7',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [0, 1, 1, 1, 1, -1]
    },
    {
        chordName: 'Cm7',
        fingering: [[0, 0, 0, 0], [0, 0, 0, 4], [0, 0, 3, 0], [1, 0, 0, 0], [0, 0, 2, 0], [0, 0, 0, 0]],
        openStrings: [-1, 1, 1, 1, 1, -1]
    },
    {
        chordName: 'D',
        fingering: [[0, 2, 0, 0], [0, 0, 3, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1]
    },
    {
        chordName: 'Dm',
        fingering: [[1, 0, 0, 0], [0, 0, 3, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1]
    },
    {
        chordName: 'DM7',
        fingering: [[0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1]
    },
    {
        chordName: 'D7',
        fingering: [[0, 3, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1]
    },
    {
        chordName: 'Dm7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 0, -1, -1]
    },
    {
        chordName: 'F',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'Fm',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'FM7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 4, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'F7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [0, 2, 0, 0], [1, 0, 0, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'Fm7',
        fingering: [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 4, 0], [0, 0, 3, 0], [1, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'B',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 0, 0, 2], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1]
    },
    {
        chordName: 'Bm',
        fingering: [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1]
    },
    {
        chordName: 'BM7',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 2, 0], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1]
    },
    {
        chordName: 'B7',
        fingering: [[0, 1, 0, 0], [0, 0, 0, 4], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1]
    },
    {
        chordName: 'Bm7',
        fingering: [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, -1]
    },
    {
        chordName: 'F#M',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'F#m',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 4], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'F#M7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 3, 0], [0, 0, 2, 0], [0, 0, 0, 4], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'F#7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'F#m7',
        fingering: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 3], [0, 1, 0, 0]],
        openStrings: [1, 1, 1, 1, 1, 1]
    },
    {
        chordName: 'F#/D',
        fingering: [[0, 0, 0, 0], [0, 0, 3, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0]],
        openStrings: [-1, 1, 1, 0, 0, 1]
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
    const strumAudio = new Audio(chord.chordAudio);

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
        $('.current-chord-container h2').text(`Current Chord: ${chordSelected}`)

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