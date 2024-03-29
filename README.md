# Todo-App-Anytime

## Proje Hakkında

Todo-App-Anytime, kullanıcıların günlük görevlerini kolayca yönetmelerine olanak tanıyan bir web uygulamasıdır. Next.js kullanılarak geliştirilmiş olan bu uygulama, görev ekleme, düzenleme ve silme gibi temel işlevleri içerir. Firebase ve Axios kullanılarak backend entegrasyonu sağlanmıştır.

## Başlarken

Projeyi lokalde çalıştırmak için aşağıdaki adımları takip ediniz:

1. Projeyi klonlayın veya indirin.
2. Proje dizinine gidin.
3. Bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
4. `.env` dosyasını proje kök dizinine yerleştirin.
5. Geliştirme sunucusunu başlatmak için `npm run dev` komutunu kullanın.
6. Uygulamaya `http://localhost:3000` adresinden erişin.

## Özellikler

- **Görev Yönetimi**: Kullanıcılar, görev ekleyebilir, düzenleyebilir ve silebilir.
- **Görev Durumu Takibi**: Görevler tamamlandıkça işaretlenebilir.
- **Arama Fonksiyonu**: Görevler arasında hızlıca arama yapılabilir. (Yapılıyor)
- **Responsive Tasarım**: Her türlü cihazda sorunsuz çalışacak şekilde tasarlanmıştır.

## Teknolojiler
- **Next.js**: Fullstack teknoloji.
- **Firebase**: Veritabanı işlemleri.
- **Axios**: HTTP istekleri için kullanılır.
- **React Bootstrap**: Arayüz bileşenleri.
- **React Toastify**: Bildirim mesajları için kullanılır.
- **React Hook Form**: Form yönetimi.
- **React Icons**: İkonlar için kullanılır.

## Kullanılan Paketler ve Sürümleri

- axios: ^1.6.8
- bootstrap: ^5.3.3
- firebase: ^10.9.0
- next: 14.1.4
- react: ^18
- react-bootstrap: ^2.10.2
- react-dom: ^18
- react-hook-form: ^7.51.2
- react-icons: ^5.0.1
- react-toastify: ^10.0.5
- @types/node: ^20
- @types/react: ^18
- @types/react-dom: ^18
- eslint: ^8
- eslint-config-next: 14.1.4
- typescript: ^5

## Yapı

- **hooks**: Özel hooklar.
  - `useCustomToast.tsx`: Başarılı veya hata mesajlarını göstermek için kullanılır.
- **models**: Uygulama modelleri.
  - `ITab.tsx`: Tab bileşenleri için model.
  - `ITodo.tsx`: Todo öğeleri için model.
  - `ITodos.tsx`: Güncelleme tarihini de içeren Todo öğeleri için genişletilmiş model.
- **utils**: Yardımcı araçlar.
  - `Service.tsx`: Axios tabanlı HTTP istekleri için yapılandırma.
- **components**: React bileşenleri.
  - `Header.tsx`: Uygulama başlığı ve arama barı.
  - `NavItemLink.tsx`: Navigasyon öğeleri için bileşen.
  - `NavPill.tsx`: Sekme navigasyon bileşeni.
  - `TabPaneContent.tsx`: Sekme içeriği bileşeni.
  - `TabsNavigation.tsx`: Ana navigasyon ve içerik yönetimi.
  - `TodoList.tsx`: Todo listesi görüntüleme ve işlemler.

## Ortam Değişkenleri

Uygulama, `.env` dosyasında tanımlı ortam değişkenlerini kullanır. Firebase konfigürasyonu ve API URL'si bu dosyada yer alır.
