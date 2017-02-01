# Setup on Openshift-Cluster:

##### Prepare
``` bash
cd ./openshift
oc login
oc project xxx
```

##### Create Image Stream
``` bash
oc create -f oc-imagestream.yaml
```

##### Create Buildconfig
``` bash
oc create -f oc-buildconfig.yaml
```