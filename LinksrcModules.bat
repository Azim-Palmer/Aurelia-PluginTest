call jspm install --unlink dash-component=github:beintrepid/dash-component
call jspm install --unlink dash-transform=github:beintrepid/dash-transform
call jspm install --unlink dash-core=github:beintrepid/dash-core
call jspm install --unlink dash-github=github:beintrepid/dash-github

call jspm uninstall dash-component
call jspm uninstall dash-transform
call jspm uninstall dash-core
call jspm uninstall dash-github


call jspm install --link dash-component=github:beintrepid/dash-component
call jspm install --link dash-transform=github:beintrepid/dash-transform
call jspm install --link dash-core=github:beintrepid/dash-core
call jspm install --link dash-github=github:beintrepid/dash-github