// Array of chords with specified fingerings for each string
const chordShape = [
    {
        chordName: 'E',
        // Each nested array represnts a string with four frets.
        fingering: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
        // The six open strings, indicating which should be included in each chord. The 1 denotes that the string should be left open, the 0 means there is a fretted note so no open string, the -1 means it should be muted and not included in the chord.
        openStrings: [1, 1, 0, 0, 0, 1],
        chordAudio: './Emajor.mp3',
        stringAudio: ['./Enote.mp3', './Blownote.mp3', './Emiddlenote.mp3', './Gsharpmiddlenote.mp3', './Bnote.mp3', './Ehighnote.mp3']

    },
    {
        chordName: 'A',
        fingering: [[0, 0, 0, 0], [0, 4, 0, 0], [0, 3, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [1, 0, 0, 0, 1, -1]
    },
    {
        chordName: 'D',
        fingering: [[0, 2, 0, 0], [0, 0, 3, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        openStrings: [0, 0, 0, 1, -1, -1]

    },
    {
        chordName: 'G',
        fingering: [[0, 0, 4, 0], [0, 0, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 2, 0]],
        openStrings: [0, 0, 1, 1, 0, 0]
    },
    {
        chordName: 'C',
        fingering: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]],
        openStrings: [1, 0, 1, 0, 0, -1]
    }
]

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
        if (note === 1) {
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

}

$(function () {

    // Delegated event handler on the <li> elements
    $('.chord-selector-buttons').on('click', 'button', function (e) {
        // Get the value of the selected chord, ie. 'C', 'G', 'Am' etc...
        const chordSelected = $(this).html();

        // Updated the DOM to display the chord selected in the text container
        $('.current-chord-container h2').text(`Current Chord: ${chordSelected}`)

        // Find the index of the selected chord in the chordShape array
        const chordSelection = chordShape.findIndex((chord) => {
            return chordSelected === chord.chordName
        })

        // Calling fingersonDOM function on the specific item in the chordShape array 
        fingersOnDOM(chordShape[chordSelection])


        $('.audio-button').on('click', function (e) {
            chordAudio(chordShape[chordSelection])
        })

        $('.string-1').on('mouseover', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[5])
        })
        $('.string-2').on('mouseover', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[4])
        })
        $('.string-3').on('mouseover', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[3])
        })
        $('.string-4').on('mouseover', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[2])
        })
        $('.string-5').on('mouseover', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[1])
        })
        $('.string-6').on('mouseover', function (e) {
            stringAudio(chordShape[chordSelection].stringAudio[0])
        })

        // audio: './test.mp3'
        // .audio-button


    })


})