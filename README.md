LOGZILLA
========

A fun script made during my spare time, to customize console logs.

![](http://gamesdbase.com/Media/SYSTEM/Nintendo_NES/Title/big/Godzilla-_Monster_of_Monsters_-_1989_-_Toho_Company.jpg)


## Customization
### Settings
`prefix` is the prefix that appears before every console log
`fontSize` logzilla's font size
`colors` text color
`bgColors` text's background color
`disableConsoleLog` boolean value. Disable all regular console logs, leaving logzilla only.

### Message types
We have four different message types that can appear in console:
`normal` is a regular console log
`warn` a warning message (console.warn)
`error` an error message (console.error)
`debug` a debug message

### Changing settings
So, if you want to change warn message color, just config your settings like this:
`settings.colors.warn`

## Usage
## Logging functions
Every logging function can accept an argument or not:

`logzilla_success('message',object)`
`logzilla_success('message')`

`logzilla_warn('message',object)`
`logzilla_warn('message')`

`...`

## Profiling
Logzilla helps you to profile single functions and their execution time. 

`logzilla_profiler('custom message',myFunction)`

![](https://dl.dropboxusercontent.com/u/79294412/logzilla3.png)
![](https://dl.dropboxusercontent.com/u/79294412/logzilla4.png)
![](https://dl.dropboxusercontent.com/u/79294412/logzilla5.png)

## Namespace pollution
Logzilla helps you to check for global variables and namespace pollution. 
`logzilla_pollution()`

## Clearing console
`logzilla_flush()`

## Rendering custom styles
If you want to see how your custom logs look like, just invoke:
`logzilla_checkStyles()`

![](https://dl.dropboxusercontent.com/u/79294412/logzilla1.png)
![](https://dl.dropboxusercontent.com/u/79294412/logzilla2.png)