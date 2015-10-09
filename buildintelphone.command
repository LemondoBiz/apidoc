cd `dirname $0`
apidoc -i apidocs.lemon.do/build/IntelPhone/ -o apidocs.lemon.do/release/IntelPhone/ -t template
cp logos/intelphone.png apidocs.lemon.do/release/IntelPhone
cd apidocs.lemon.do/release/IntelPhone
chmod go+rwx *png
chmod go+rwx *ico