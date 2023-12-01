cd %localhost%
setlocal enabledelayedexpansion

for /l %%i in (1, 1, 24) do (
    set "num=%%i"
    if !num! lss 10 (
        set "day=Day0!num!"
    ) else (
        set "day=Day!num!"
    )
    call ng g c !day!
)

endlocal
