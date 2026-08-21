# keys/

## license_public.pem

File `license_public.pem` phải là public key Ed25519 **thật** của đúng BLP server
đã cấp token đang lưu trong DB (`t_License_State.signedToken`).

Nếu file này lệch cặp khóa với BLP (key cũ, key của instance dev khác), MỌI token
đều fail với lỗi `Invalid license token signature`. Khi thay file, phải **restart
app**: `services/license/verify.js` cache `publicKeyObject` ở module scope, chỉ đọc
file đúng 1 lần lúc verify đầu tiên.

Copy public key Ed25519 từ BLP server (Bavitech License Platform) vào đây:

    <BLP repo>/keys/license_public.pem   ->   <server repo>/keys/license_public.pem

Đây là **public key**, không phải bí mật — an toàn khi commit vào repo này và
khi phân phối kèm bản build. Tuyệt đối KHÔNG copy `license_private.pem` của BLP
sang đây.

Nội dung file phải có dạng:

    -----BEGIN PUBLIC KEY-----
    ...
    -----END PUBLIC KEY-----

`services/license/verify.js` đọc file này bằng `crypto.createPublicKey()` và sẽ
ném lỗi nếu file thiếu hoặc rỗng — resolver `GetLicenseInfo` bắt lỗi này và trả
về qua field `payloadError` thay vì crash server.
