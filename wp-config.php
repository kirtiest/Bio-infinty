<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\Bio-infinty\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'Bio-infinty' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`3k|CsPW.[_N#ok;<.7:tEB^X0scKXVr,5`4Ig47m`v6:]9~UKZs&VW>gt,Ltl~^' );
define( 'SECURE_AUTH_KEY',  '3YC&CM#AzCtWE}J:zIAzgvH3bBNqijn.&DIU2(rU^Y/hJ#Pf<~<E)0*WhBOPS@.6' );
define( 'LOGGED_IN_KEY',    'N!s$Q~kEMw;ai J[!msa*$k/Gj-M,KN`PS}VPWHY?*gT/wed=Cm]d)JqzA1O$4vy' );
define( 'NONCE_KEY',        '.wHCNh1rI_XTJ{N]=jUm?G]NCTN&v~#;q:$%mO5~?U8U[)vnuDJ)Yec/qH{DDwgP' );
define( 'AUTH_SALT',        'X(K%UxNvt@h}b,?8C@m+TCaR;DRwVM)/;T!/EyJk+nhMt5vs0USefC3ppj02.]jm' );
define( 'SECURE_AUTH_SALT', ':,X;HKYO|ztCt1Cx]N3+Ynm%)ulG(&UjP 2~0gc~soPIG1yeFh5RO)*Np{|[1Z7U' );
define( 'LOGGED_IN_SALT',   'pg}PRZmk.k@p+ |rDtYQ4Ig~EelkJ+Yp5ip{qy/!=iD,&C?P)9Qdexr!^^:l*/]%' );
define( 'NONCE_SALT',       'Y[K[)l=B_^W3).%?N Rt@;!Y#J)+8)(&2V$B:@h7CLEhdE!W,6e{2P#TTtXEbVM.' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'kj_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
