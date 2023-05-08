async function openTiki() {
    await window.TikiSdk.config()
        .theme
            .primaryTextColor('#232153')
            .secondaryTextColor('#000000')
            .primaryBackgroundColor('#FFFFFF')
            .secondaryBackgroundColor('#D2EAFF')
            .accentColor('#D81E17')
            .fontFamily('"Lato", sans-serif')
            .and()
        .offer
            .description('Share your cookies with us and in exchange get One FREE 6-cookie box of Double Decker Oatmeal Crème Pies.')
            .reward('images/cookies-4-creme.png')
            .bullet({text: 'Learn how our ads perform', isUsed: true})
            .bullet({text: 'Reach you on other platforms', isUsed: false})
            .bullet({text: 'Sold to other companies', isUsed: false})
            .terms('terms.md')
            .ptr('db2fd320-aed0-498e-af19-0be1d9630c63')
            .tag(TikiSdk.TitleTag.deviceId())
            .use({usecases: [TikiSdk.LicenseUsecase.attribution()]})
            .add()
        .initialize('f3dbd181-1273-4be7-8a56-a9d258feccda', 'debfan-1');

    window.TikiSdk.present();
}
