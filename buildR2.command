cd `dirname $0`
apidoc -i apidocs.lemon.do/build/R2/ -o apidocs.lemon.do/release/R2/ -t template
cp logos/r2.png apidocs.lemon.do/release/R2
cd apidocs.lemon.do/release/R2
chmod go+rwx *png
chmod go+rwx *ico

