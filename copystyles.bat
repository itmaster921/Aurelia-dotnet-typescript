mkdir "./stylings";
mkdir "./stylings/external";
mkdir "./src/stylings/external/bourbon";
mkdir "./src/stylings/external/bourbon-neat";
mkdir "./src/stylings/external/bourbon-bitters";

xcopy /s "./node_modules/bourbon/app/assets/stylesheets" "./src/stylings/external/bourbon"
xcopy /s "./node_modules/bourbon-neat/app/assets/stylesheets" "./src/stylings/external/bourbon-neat"
xcopy /s "./node_modules/bourbon-bitters/app/assets/stylesheets" "./src/stylings/external/bourbon-bitters"