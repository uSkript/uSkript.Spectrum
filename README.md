# Spectrum Property Editor for Umbraco

|Package    |uSkript.Spectrum v1.0.0           
|-----------------|-----------------
|Umbraco|v8.7.0
|Vendor|[Spectrum v1.8.1](https://github.com/bgrins/spectrum)

### Description:
Simply another color picker using the spectrum plugin. However, the picker has been customised to look close to the native UI of Umbraco.\
In addition to that, we have added the option to have the property field visible to show the color value selected.

### Installation:
** Coming Shortly **

### Previews:

##### Default
![Default Preview](https://raw.githubusercontent.com/uSkript/uSkript.Spectrum/master/assets/preview/Default.jpg)

##### Default with field
![Default with field Preview](https://raw.githubusercontent.com/uSkript/uSkript.Spectrum/master/assets/preview/Default%20with%20field.jpg)

##### Inline
![Inline Preview](https://raw.githubusercontent.com/uSkript/uSkript.Spectrum/master/assets/preview/Inline.jpg)

##### Inline with field
![Inline with field Preview](https://raw.githubusercontent.com/uSkript/uSkript.Spectrum/master/assets/preview/Inline%20with%20field.jpg)

---
**Please note:**
- Some options of the Spectrum plugin are either set by default or not available.
- More configurable options will be available in future releases
---

### Configurable Options:
Option | Spectrum Equivalent | Type | Description
------------ | ------------- | ------------- | -------------
Inline | *Flat* | Boolean | Will always show up at full size, and be positioned as an inline-block element.
Format | *Preferred Format* | String | Output type: Hex, Hex3, HSL, RGB, Name
Show Color Palette | *Show Palette* | Boolean | Displays the color palette as well as the color box
Show Palette Only | *Show Palette Only* | Boolean | Displays the palette only and hides the color box
Toggle Color Box | *Toggle Palette Only* | Boolean | If 'Show Palette Only' is true, this will add a toggle button to open and close the colour box
Add Default Palette | X | Boolean | Will add a default color palette (see below)
Additional Palette | *Palette* | Comma separated strings | Example: #aaa, #ff0, #00f etc...
Add Selections to Palette | *Show Selection Palette* | Boolean | Add selected colors to the palette
Show Palette Input | *Show Input* | Boolean | Displays an input inside the picker with the selected value
Show Property Input | X | Boolean | Displays the Umbraco property input with the selected value (see previews below)
Allow Empty Selection | *Allow Empty* | Boolean | Allow transparent color selection
Show Alpha Slider | *Show Alpha* | Boolean | Allows alpha selection using RGBA values

### Default Options - Non-configurable:
The below options are set as default at this stage as we believe they're commonly required. Although you can edit these option in the controller js file.
Option | Value | Type
------------ | ------------- | -------------
showInitial | true | Boolean
clickoutFiresChange | true | Boolean
hideAfterPaletteSelect | true | Boolean
cancelText | Cancel
chooseText | Choose
togglePaletteMoreText | Color Box
togglePaletteLessText | Close Color Box
containerClassName | ucsp-container
replacerClassName | ucsp-toggle
appendTo | ".umb-pane" (It is important to not change this value as spectrum is appended to the body by default, resulting to the colour picker to be visible on Back Office timeout if it is toggled)

### Default Color Palette:
```
#000, #444, #666, #999, #ccc, #eee, #f3f3f3, #fff, 
#f00, #f90, #ff0, #0f0, #0ff, #00f, #90f, #f0f, 
#f4cccc, #fce5cd, #fff2cc, #d9ead3, #d0e0e3, #cfe2f3, #d9d2e9, #ead1dc, 
#ea9999, #f9cb9c, #ffe599, #b6d7a8, #a2c4c9, #9fc5e8, #b4a7d6, #d5a6bd, 
#e06666, #f6b26b, #ffd966, #93c47d, #76a5af, #6fa8dc, #8e7cc3, #c27ba0, 
#c00, #e69138, #f1c232, #6aa84f, #45818e, #3d85c6, #674ea7, #a64d79, 
#900, #b45f06, #bf9000, #38761d, #134f5c, #0b5394, #351c75, #741b47, 
#600, #783f04, #7f6000, #274e13, #0c343d, #073763, #20124d, #4c1130
```

### Usage:
You can call the value of the color picker from the front-end in the same manner you would call a string value.\
Obviously, you will have an inline css in the target item.