package com.mytiki.d2nexample

import android.content.Context
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.hello_tiki_plugin.HelloTikiPlugin
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.embedding.engine.dart.DartExecutor
import io.flutter.embedding.engine.loader.FlutterLoader
import io.flutter.embedding.engine.plugins.util.GeneratedPluginRegister
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val flutterEngine = initFlutter(this.applicationContext)
        val helloTikiPlugin = HelloTikiPlugin.fromEngine(flutterEngine)
        button.setOnClickListener {
            helloTikiPlugin.sayHello()
        }
    }

    private fun initFlutter(context: Context): FlutterEngine {
        val loader = FlutterLoader()
        loader.startInitialization(context)
        loader.ensureInitializationComplete(context, null)
        val flutterEngine = FlutterEngine(context)
        flutterEngine.dartExecutor.executeDartEntrypoint(
            DartExecutor
                .DartEntrypoint
                .createDefault()
        )
        GeneratedPluginRegister.registerGeneratedPlugins(flutterEngine)
        return flutterEngine
    }
}
