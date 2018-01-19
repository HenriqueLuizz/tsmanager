@echo off
:menu
cls
echo.
echo -------------------------------------------------------
echo --  Gestor de servicos Protheus  -  TOTVS - POUPEX   --
echo -------------------------------------------------------
echo -- Opcao 1. Iniciar Todos os Servicos do Protheus         --
echo -- Opcao 2. Parar Todos Servicos do Protheus              --
echo -- Opcao 3. Iniciar Servicos Basicos                               --
echo -- Opcao 4. Parar Servicos Basicos                               --
echo -- Opcao 5. Iniciar Servico para Compilacao                 --
echo -- Opcao 6. Parar Servico para Compilacao                  --
echo -- Opcao 7. Iniciar Servico Master Slaves                      --
echo -- Opcao 8. Parar Servico Master Slaves                       --
echo -- Opcao 9. Sair                                                              --
echo -------------------------------------------------------
echo.
choice /c:123456789 /m "Escolha uma opcao..:"
if errorlevel 9 goto fim
if errorlevel 8 goto stopslv
if errorlevel 7 goto startslv
if errorlevel 6 goto stopcmp
if errorlevel 5 goto startcmp
if errorlevel 4 goto stopsb
if errorlevel 3 goto startsb
if errorlevel 2 goto stop
if errorlevel 1 goto start
goto fim

:stop
echo Parando o servico do MASTER aguarde ..
taskkill /IM "AppServer_Master.exe" /F /T /S localhost >nul

echo Parando os servicos Slaves, aguarde ..
taskkill /IM "AppServer_SRV01.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV02.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV03.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV04.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV05.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV06.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV07.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV08.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV09.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV10.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV11.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV12.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV13.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV14.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV15.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV16.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV17.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV18.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV19.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV20.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV21.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV22.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV23.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV24.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV25.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV26.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV27.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV28.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV29.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV30.exe" /F /T /S localhost >nul

echo Parando o servico do WebService, aguarde ...
taskkill /IM "AppServer_WebService.exe" /F /T /S localhost >nul

echo Parando o servico do WorkFlow, aguarde ...
taskkill /IM "AppServer_WorkFlow.exe" /F /T /S localhost >nul

echo Parando o servico do Scheduler, aguarde ...
taskkill /IM "AppServer_Scheduler.exe" /F /T /S localhost >nul

echo Parando o servico do Compilacao, aguarde ...
taskkill /IM "AppServer_Compilacao.EXE" /F /T /S localhost>nul


echo Parando o servico do SPED-TSS, aguarde ...
taskkill /IM "AppServer_SPED.EXE" /F /T /S localhost>nul


echo Parando o servico do DBAccess, aguarde ...
taskkill /IM "DBAccess64_PRD.EXE" /F /T /S localhost>nul

echo Parando o servico do Ctree Server, aguarde ...
sc \\localhost stop "Protheus CtreeServer 9.5" >nul

echo Limpando arquivos de LOG ...
del D:\*.log /s /q /f >nul

echo Limpando arquivos de TMP ...
del D:\*.tmp /s /q /f >nul

echo Limpando arquivos de BAK ...
del D:\*.bak /s /q /f >nul

echo Limpando arquivos de ind ...
del D:\*.ind /s /q /f >nul

echo Servicos Parados...
ping -n 5 \\localhost >nul

set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop.log

goto menu

:start
echo Iniciando o servidor de Licencas,Aguarde..
sc \\localhost start TOTVSLicense >nul

ping -n 10 \\localhost >nul

echo Iniciando o servico do Ctree Server9.5,Aguarde...
sc \\localhost start "Protheus CtreeServer 9.5" >nul

ping -n 10 localhost >nul

echo Iniciando o servico do Dbaccess, Aguarde ..
sc \\localhost start "dbaccess64" >nul

ping -n 5 localhost >nul

echo Iniciando o servico do SPED-TSS, Aguarde ..
sc \\localhost start "AppServer_SPED" >nul


echo Iniciando o servico do Slaves, Aguarde ...
sc \\localhost start "AppServer_SRV01" >nul
sc \\localhost start "AppServer_SRV02" >nul
sc \\localhost start "AppServer_SRV03" >nul
sc \\localhost start "AppServer_SRV04" >nul
sc \\localhost start "AppServer_SRV05" >nul
sc \\localhost start "AppServer_SRV06" >nul
sc \\localhost start "AppServer_SRV07" >nul
sc \\localhost start "AppServer_SRV08" >nul
sc \\localhost start "AppServer_SRV09" >nul
sc \\localhost start "AppServer_SRV10" >nul
sc \\localhost start "AppServer_SRV11" >nul
sc \\localhost start "AppServer_SRV12" >nul
sc \\localhost start "AppServer_SRV13" >nul
sc \\localhost start "AppServer_SRV14" >nul
sc \\localhost start "AppServer_SRV15" >nul
sc \\localhost start "AppServer_SRV16" >nul
sc \\localhost start "AppServer_SRV17" >nul
sc \\localhost start "AppServer_SRV18" >nul
sc \\localhost start "AppServer_SRV19" >nul
sc \\localhost start "AppServer_SRV20" >nul
sc \\localhost start "AppServer_SRV21" >nul
sc \\localhost start "AppServer_SRV22" >nul
sc \\localhost start "AppServer_SRV23" >nul
sc \\localhost start "AppServer_SRV24" >nul
sc \\localhost start "AppServer_SRV25" >nul
sc \\localhost start "AppServer_SRV26" >nul
sc \\localhost start "AppServer_SRV27" >nul
sc \\localhost start "AppServer_SRV28" >nul
sc \\localhost start "AppServer_SRV29" >nul
sc \\localhost start "AppServer_SRV30" >nul

echo Iniciando o servico do WorkFlow...
sc \\localhost start "AppServer_WorkFlow" >nul

echo Iniciando o servico do Webservice...
sc \\localhost start "AppServer_Webservice" >nul

echo Iniciando o servico do Scheduler...
sc \\localhost start "AppServer_Scheduler" >nul

echo Iniciando o servico do Master...
sc \\localhost start "AppServer_Master" >nul

echo Iniciando o servico do Compilacao...
sc \\localhost start "Appserver_Cmp" >nul

set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start.log
goto menu


:startsb

echo Iniciando o servicos basicos..

echo Iniciando o servidor de Licencas...
sc \\localhost start TOTVSLicense >nul

ping -n 10 \\localhost >nul

echo Iniciando o servico do Ctree Server9.5...
sc \\localhost start "Protheus CtreeServer 9.5" >nul

ping -n 10 localhost >nul

echo Iniciando o servico do Dbaccess, aguarde ..
sc \\localhost start "dbaccess64" >nul


set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start_ServicoBasicos.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start_ServicoBasicos.log
goto menu



:stopsb
echo Parando os servicos Basicos aguarde ..
echo Parando o servico do MASTER aguarde ..
taskkill /IM "AppServer_Master.exe" /F /T /S localhost >nul

echo Parando o servico do WebService, aguarde ...
taskkill /IM "AppServer_WebService.exe" /F /T /S localhost >nul

echo Parando o servico do WorkFlow, aguarde ...
taskkill /IM "AppServer_WorkFlow.exe" /F /T /S localhost >nul

echo Parando o servico do Scheduler, aguarde ...
taskkill /IM "AppServer_Scheduler.exe" /F /T /S localhost >nul

echo Parando o servico do Compilacao, aguarde ...
taskkill /IM "AppServer_Compilacao.EXE" /F /T /S localhost>nul


echo Parando o servico do SPED-TSS, aguarde ...
taskkill /IM "AppServer_SPED.EXE" /F /T /S localhost>nul


echo Parando o servico do DBAccess, aguarde ...
taskkill /IM "DBAccess64_PRD.EXE" /F /T /S localhost>nul

echo Parando o servico do Ctree Server, aguarde ...
sc \\localhost stop "Protheus CtreeServer 9.5" >nul


set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop_SB.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop_ServicoBasicos.log
goto menu
:startcmp
echo Iniciando o servico do Compilacao...
sc \\localhost start "Appserver_Cmp" >nul
set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start_Cmp.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start_Cmp.log
goto menu

:stopcmp
echo Parando o servico do Compilacao, aguarde ...
taskkill /IM "AppServer_Compilacao.EXE" /F /T /S localhost>nul
set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop_Cmp.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop_Cmp.log
goto menu

:startslv

echo Iniciando o servico do Ctree Server9.5,Aguarde...
sc \\localhost start "Protheus CtreeServer 9.5" >nul
ping -n 10 localhost >nul

echo Iniciando o servico do Master Slaves, Aguarde ...
sc \\localhost start "AppServer_SRV01" >nul
sc \\localhost start "AppServer_SRV02" >nul
sc \\localhost start "AppServer_SRV03" >nul
sc \\localhost start "AppServer_SRV04" >nul
sc \\localhost start "AppServer_SRV05" >nul
sc \\localhost start "AppServer_SRV06" >nul
sc \\localhost start "AppServer_SRV07" >nul
sc \\localhost start "AppServer_SRV08" >nul
sc \\localhost start "AppServer_SRV09" >nul
sc \\localhost start "AppServer_SRV10" >nul
sc \\localhost start "AppServer_SRV11" >nul
sc \\localhost start "AppServer_SRV12" >nul
sc \\localhost start "AppServer_SRV13" >nul
sc \\localhost start "AppServer_SRV14" >nul
sc \\localhost start "AppServer_SRV15" >nul
sc \\localhost start "AppServer_SRV16" >nul
sc \\localhost start "AppServer_SRV17" >nul
sc \\localhost start "AppServer_SRV18" >nul
sc \\localhost start "AppServer_SRV19" >nul
sc \\localhost start "AppServer_SRV20" >nul
sc \\localhost start "AppServer_SRV21" >nul
sc \\localhost start "AppServer_SRV22" >nul
sc \\localhost start "AppServer_SRV23" >nul
sc \\localhost start "AppServer_SRV24" >nul
sc \\localhost start "AppServer_SRV25" >nul
sc \\localhost start "AppServer_SRV26" >nul
sc \\localhost start "AppServer_SRV27" >nul
sc \\localhost start "AppServer_SRV28" >nul
sc \\localhost start "AppServer_SRV29" >nul
sc \\localhost start "AppServer_SRV30" >nul

echo Iniciando o servico do WorkFlow...
sc \\localhost start "AppServer_WorkFlow" >nul

echo Iniciando o servico do Webservice...
sc \\localhost start "AppServer_Webservice" >nul

echo Iniciando o servico do Scheduler...
sc \\localhost start "AppServer_Scheduler" >nul

echo Iniciando o servico do Master...
sc \\localhost start "AppServer_Master" >nul


set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start_MasterSlaves.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Start\Start_MasterSlaves.log
goto menu


:stopslv
echo Parando o servico do MASTER aguarde ..
taskkill /IM "AppServer_Master.exe" /F /T /S localhost >nul

echo Parando os servicos Slaves, aguarde ..
taskkill /IM "AppServer_SRV01.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV02.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV03.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV04.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV05.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV06.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV07.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV08.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV09.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV10.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV11.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV12.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV13.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV14.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV15.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV16.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV17.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV18.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV19.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV20.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV21.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV22.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV23.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV24.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV25.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV26.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV27.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV28.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV29.exe" /F /T /S localhost >nul
taskkill /IM "AppServer_SRV30.exe" /F /T /S localhost >nul

echo Parando o servico do WebService, aguarde ...
taskkill /IM "AppServer_WebService.exe" /F /T /S localhost >nul

echo Parando o servico do WorkFlow, aguarde ...
taskkill /IM "AppServer_WorkFlow.exe" /F /T /S localhost >nul

echo Parando o servico do Scheduler, aguarde ...
taskkill /IM "AppServer_Scheduler.exe" /F /T /S localhost >nul

set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop_MasterSlaves.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop_MasterSlaves.log
goto menu


:fim
endlocal


echo Ate logo e bom trabalho ...
ping -n 10 localhost >nul 
