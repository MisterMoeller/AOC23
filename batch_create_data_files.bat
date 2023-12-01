cd %localhost%
cd src/assets

setlocal enabledelayedexpansion
for /l %%i in (1, 1, 24) do (
    set "num=%%i"
    if !num! lss 10 (
        set "num=0!num!"
    )
    set "folderName=Day!num!"
    mkdir !folderName!
    echo Created folder: !folderName!

    rem Create empty text files inside the folder
    type nul > "!folderName!\data_day_!num!.txt"
    type nul > "!folderName!\data_day_!num!_part_1_test.txt"
    type nul > "!folderName!\data_day_!num!_part_2_test.txt"

    echo Created text files in folder: !folderName!
    rem Place your additional commands using the variable here
)

pause
endlocal
