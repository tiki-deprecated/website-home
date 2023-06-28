# Quickstart - Kotlin + XML

Add TIKI to an Android project in minutes. Refer to our [quickstart guide](https://mytiki.com/docs/quickstart) for detailed instructions.

Before you get started, you'll need a **Publishing ID**. Sign up for free at [console.mytiki.com](https://console.mytiki.com).

## Clone the Repository
```shell
git clone https://github.com/tiki/tiki-dx.git
cd quickstart/android
```

## Adding TIKI
If you haven't already, add Maven Central to your Project's `<PROJECT_ROOT>/build.gradle`.

```
repositories {
  mavenCentral()
}
```

Add the dependency in your App's build.gradle file (`<PROJECT_ROOT>/app/build.gradle`) and make sure to grab the latest version. We release often.

```
implementation("com.mytiki:tiki-sdk-android:2.1.2")
```

## Create an Offer
```
import com.mytiki.tiki_sdk_android.ui.Permission
import java.util.*
import java.util.concurrent.TimeUnit

class MainActivity : AppCompatActivity() {
   override fun onCreate(savedInstanceState: Bundle?) {
     super.onCreate(savedInstanceState)
     TikiSdk
       .offer
         .ptr("3332bd1b-7b0a-4b0f-a4e1-7fb28d3524f9")
         .description("I can't wait to tell people about TIKI")
         .use(listOf(LicenseUsecase.ATTRIBUTION))
         .bullet("Learn how our ads perform ", true)
         .bullet("Reach you on other platforms", false)
         .bullet("Sold to other companies", false)
         .tag(TitleTag("quickstart"))
         .reward(ResourcesCompat.getDrawable(resources, R.drawable.reward, null)!!)
         .terms(this,"terms.md")
         .and()
       .init(this, "PUBLISHING ID", "muppet420")
   }
}
```

## Displaying the Offer
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center|center"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <ImageView
            android:layout_width="wrap_content"
            android:layout_height="60dp"
            android:src="@drawable/icon_logo"
    />

    <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Let's do this shit"
            android:textColor="#1C0000"
            android:layout_marginVertical="5dp"
    />
    
   <Button
            android:id="@+id/start"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Show Offer"
            android:background="#1C0000"
            android:textColor="#FFB822"
            android:padding="10dp"
            android:layout_marginTop="20dp"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent" 
   />
</LinearLayout>
```

## Running the App
Just press run.

## Get your license from the API
First you'll need an API Key (they're also free), just open back up the [TIKI Console](https://console.mytiki.com). Open your project and under Private Keys click

1. Exchange your API Key for an Access Token
    ```shell
    curl -G --request POST \
    --url 'https://mytiki.com/api/authorize' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'accept: application/json' \
    --data-urlencode 'grant_type=client_credentials' \
    --data-urlencode 'scope=index' \
    --data-urlencode 'client_id=<API KEY ID>' \
    --data-urlencode 'client_secret=<API KEY SECRET>' \
    ```

   From the response, copy the `access_token` field

2. Retrieve the license record

   ```shell
   curl --request POST \
     --url 'https://mytiki.com/api/license/list?maxResults=100' \
     --header 'accept: application/json' \
     --header 'authorization: Bearer <ACCESS TOKEN>' \
     --header 'content-type: application/json' \
     --data '
    {
    "tags": [
        "custom:quickstart"
        ]
    }
    '
   ```

   You should get back something like:

   ```json
   {
    "approxResults":1,
      "results":[
        {
          "id":"cu4yNsQCA9I7s8UgCi0M-XWw5wzdZT_s1bz9mdCaQ4M",
          "ptr":"FJGgbIVAqeMhUMPBk7zQ/RT4Qwkywqz2NQfKCpV3TvQ=",
          "tags":[
            "custom:quickstart"
          ],
          "uses":[
            {
              "usecase":"attribution"
            }
          ]
        }
      ]
    }
   ```
   Want to see the full License and Title records? Use the `id` field from the List Licenses response and call [Get License](https://mytiki.com/reference/get-license). Then grab the `title` field from the Get License response and call [Get Title](https://mytiki.com/reference/get-title).

