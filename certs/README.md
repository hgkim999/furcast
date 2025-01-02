> This folder contains certs for local HTTPS development.

```shell
sudo certbot certonly --manual --preferred-challenges dns --cert-name furcast.dev -d furcast.dev -d *.furcast.dev -d *.xip.furcast.dev
```

For the `xip.furcast.dev` DNS challenge record, you may have to temporarily rename the `NS` record (to e.g. `xip2`) for the `TXT` record to resolve correctly. Try to resolve it locally first before proceeding with the certificate request. You should probably wait a minute for DNS caches to expire.

```shell
dig TXT _acme-challenge.furcast.dev. @1.1.1.1
dig TXT _acme-challenge.xip.furcast.dev. @1.1.1.1
```

Once you have the new certificate, open `/etc/letsencrypt/archive/furcast.dev/` and copy the new files over. Delete the old files and rename the new files to replace the old files.

Finally, rename `xip2` back to `xip`.
